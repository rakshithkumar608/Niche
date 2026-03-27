from app.rag.embedder import get_embedding
from app.rag.vector_store import search

def retrieve_context(niche):
    results = search(niche)
    
    return results[:3]
    
    examples = []
    for r in results:
        examples.append({
            "hook": r["hook"],
            "content": r["content"],
            "pattern_interrupt": r["pattern_interrupt"],
            "cta": r["cta"]
        })
        
    return examples[:3]