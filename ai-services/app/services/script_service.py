from app.rag.retriever import retrieve_context
import json
import re
from app.services.groq_client import generate_text
from app.utils.prompt_templates import build_prompts
from app.rag.embedder import get_embedding
from app.rag.vector_store import add_to_index
from app.agents.content_agent import improved_scripts


# stores the scripts in rag

def store_scripts_in_rag(scripts):
    texts = []

    for s in scripts:
        text = f"{s.get('hook','')} {s.get('content','')} {s.get('pattern_interrupt','')} {s.get('cta','')}"
        texts.append(text)

    embeddings = [get_embedding(t) for t in texts]
    add_to_index(texts, embeddings)


# Extracts the text in JSON formate

def extract_json(text):
    try:
        parsed = json.loads(text)
        if "scripts" in parsed:
            return parsed
    except:
        pass
    match = re.search(r"\{[\s\s*\]}", text)
    if match:
        try:
            parsed = json.loads(match.group())
            if "scripts" in parsed:
                return parsed
        except:
            pass
    print("💀 JSON PARSER FAILED..")
    print("RAE OUTPUT:", text)
    
    return {"scripts": []}

# Normalize the texts

def normalize_script(s):
    return {
        "hook": s.get("hook", ""),
        "content": s.get("content", ""),
        "pattern_interrupt": s.get("pattern_interrupt", ""),
        "cta": s.get("cta", "")
    }

# It genetrates the Scripts

def generate_scripts(data):
    niche = data["niche"]

    context = retrieve_context(niche)

    prompt = build_prompts(
        niche,
        data.get("tone", "engaging"),
        data.get("num_scripts", 10),
        context
    )

    
    raw_output = generate_text(prompt)

    print("\n===== RAW OUTPUT =====\n", raw_output)
    print("👉 RAW LENGTH:", len(raw_output))

    
    parsed = extract_json(raw_output)
    scripts = parsed.get("scripts", [])
    
    if not scripts:
        print("😏 No Script returned from AI")
    
    improved_list = []
    
    for s in scripts:
        s = normalize_script(s)
        
        improved = improved_scripts(s)
        
        if not isinstance(improved, dict):
            improved = s
            
        improved["virality_score"] = score_script(improved)
        
        improved_list.append(improved)
        
    improved_list = sorted(
        improved_list,
        key=lambda x:x.get("virality_score", 0),
        reverse=True
    )
            
    if improved_list:
        store_scripts_in_rag(improved_list[:3])
        
    final_output = {"scripts": improved_list}

    print("\n===== FINAL OUTPUT =====\n", final_output)

    return final_output


# It shows the score of the given OUTPUT

def score_script(script):
    score = 0

    hook = script.get("hook", "").lower()
    content = script.get("content", "").lower()

   
    if any(word in hook for word in ["stop", "don't", "never", "secret", "nobody"]):
        score += 2

    
    if any(word in content for word in ["shocking", "crazy", "insane", "mistake"]):
        score += 2

    
    if script.get("cta"):
        score += 1

   
    if len(content) < 200:
        score += 1

    return score