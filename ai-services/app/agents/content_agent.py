from app.services.groq_client import generate_text

def improved_scripts(script):
    prompt = f"""
Improve this short-form video script to make it more viral. 

Script:
HOOK: {script.get('hook', '')}
CONTENT: {script.get('content', '')}
PATTERN: {script.get('pattern_interrupt', '')}
CTA: {script.get('cta', '')}

Make it more engaging and emotionally strong.add()

Retun in same JSON format.
    """
    
    response = generate_text(prompt)
    return response