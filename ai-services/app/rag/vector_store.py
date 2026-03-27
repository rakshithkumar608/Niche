import faiss
import numpy as np
from app.rag.embedder import get_embedding


dimension = 384
index = faiss.IndexFlatL2(dimension)

stored_texts = []

def add_to_index(texts, embeddings):
    global stored_texts
    
    index.add(np.array(embeddings).astype("float32"))
    stored_texts.extend(texts)
    
def add_texts(texts, embeddings):
    add_to_index(texts, embeddings)
    
def search(query: str, k=3):
    query_embedding = get_embedding(query)
    
    query_vector = np.array([query_embedding]).astype("float32")
    
    D, I = index.search(query_vector, k)
    
    
    return [stored_texts[i] for i in I[0] if i < len(stored_texts)]

