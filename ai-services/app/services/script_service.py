from app.services.groq_client import generate_text
from app.utils.prompt_templates import build_prompts


def generate_scripts(data):
    prompt = build_prompts(
        data["niche"],
        data.get("tone", "engaging"),
        data.get("num_scripts", 5)
    )
    
    raw_output = generate_text(prompt)
    
    return raw_output