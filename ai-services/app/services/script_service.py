from app.rag.retriever import retrieve_context
import json
import re
from app.services.groq_client import generate_text
from app.utils.prompt_templates import build_prompts
from app.rag.embedder import get_embedding
from app.rag.vector_store import add_to_index


def store_scripts_in_rag(scripts):
    texts = []

    for s in scripts:
        text = f"{s['hook']} {s['content']} {s['pattern_interrupt']} {s['cta']}"
        texts.append(text)

    embeddings = [get_embedding(t) for t in texts]

    add_to_index(texts, embeddings)



def extract_json(text):
    try:
        return json.loads(text)
    except:
        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            try:
                return json.loads(match.group())
            except:
                pass
    return {"scripts": []}


def generate_scripts(data):
    niche = data["niche"]

    
    context = retrieve_context(niche)
    context_text = "\n".join(context)

    
    prompt = build_prompts(
        niche,
        data.get("tone", "engaging"),
        data.get("num_scripts", 5)
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
    if parsed.get("scripts"):
        store_scripts_in_rag(parsed["scripts"])

    print("\n===== PARSED OUTPUT =====\n", parsed)

    return parsed