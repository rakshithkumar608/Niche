from app.rag.embedder import get_embedding
from app.rag.vector_store import search

def retrieve_context(query):
    embedding = get_embedding(query)
    results = search(embedding)
    return results