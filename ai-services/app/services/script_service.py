import json
from app.services.groq_client import generate_text
from app.utils.prompt_templates import build_prompts


def extract_json(text):
    """
    Extract JSON from AI response safely
    """
    
    try:
        return json.loads(text)
    
    except:
        start = text.find("{")
        end = text.rfind("}") + 1
        
        if start != -1 and end != -1:
            json_str = text[start:end]
            try:
                return json.loads(json_str)
            except:
                pass
            
    return {"scripts":[]}
        


def generate_scripts(data):
    prompt = build_prompts(
        data["niche"],
        data.get("tone", "engaging"),
        data.get("num_scripts", 5)
    )
    
    raw_output = generate_text(prompt)
    
    print("RAW OUTPUT:\n", raw_output)
    
    parsed = extract_json(raw_output)
    print("PARSED OUTPUT:\n", parsed)
    
    
    return parsed