from app.services.groq_client import generate_text

def improved_scripts(script):
    prompt = f"""
Improve this short-form video script to make it more viral. 

Script:
Hook: {script['hook']}
Content: {script['content']}
Pattern Interrupt: {script['pattern_interrupt']}
CTA: {script['cta']}

Make it more engaging and emotionally strong.add()

Retun in same JSON format.
    """
    
    response = generate_text(prompt)
    return response