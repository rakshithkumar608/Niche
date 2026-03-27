from app.rag.retriever import retrieve_context
import json
import re
from app.services.groq_client import generate_text
from app.utils.prompt_templates import build_prompts
from app.rag.embedder import get_embedding
from app.rag.vector_store import add_to_index
from app.agents.content_agent import improved_scripts


def store_scripts_in_rag(scripts):
    texts = []

    for s in scripts:
        text = f"{s['hook']} {s['content']} {s['pattern_interrupt']} {s['cta']}"
        texts.append(text)

    embeddings = [get_embedding(t) for t in texts]

    add_to_index(texts, embeddings)



def extract_json(text):
    try:
        parsed = json.loads(text)
        if "scripts" in parsed:
            return parsed
    except:
        pass
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        try:
            parsed = json.loads(match.group())
            if "scripts" in parsed:
                return parsed
        except:
            pass
    print("💀 JSON PARSER FAILED..")
    return {"scripts": []}


def generate_scripts(data):
    niche = data["niche"]

    
    context = retrieve_context(niche)
    context_text = "\n".join(context)

    
    prompt = build_prompts(
        niche,
        data.get("tone", "engaging"),
        data.get("num_scripts", 10)
    )

    
    full_prompt = f"""{prompt}

🔥 Use these high-performing examples for inspiration:
{context_text}

⚠️ IMPORTANT:
Return ONLY valid JSON. No extra text.
"""

    
    raw_output = generate_text(full_prompt)

    print("\n===== RAW OUTPUT =====\n", raw_output)

    
    parsed = extract_json(raw_output)
    scripts = parsed.get("scripts", [])
    
    improved_list = []
    
    for s in scripts:
        improved = improved_scripts(s)
        if improved and isinstance(improved, dict):
            improved_list.append(improved)
        else:
            improved_list.append(s)
            
    if improved_list:
        store_scripts_in_rag(parsed["scripts"])
        
    final_output = {"scripts": improved_list}

    print("\n===== PARSED OUTPUT =====\n", final_output)

    return final_output