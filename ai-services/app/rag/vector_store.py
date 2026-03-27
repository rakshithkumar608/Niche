import faiss
import numpy as np


dimension = 384
index = faiss.IndexFlatL2(dimension)

stored_texts = []

def add_to_index(texts, embeddings):
    global stored_texts
    
    index.add(np.array(embeddings).astype("float32"))
    stored_texts.extend(texts)
    
def add_texts(texts, embeddings):
    add_to_index(texts, embeddings)
    
def search(query_embedding, k=3):
    D, I = index.search(np.array([query_embedding]).astype("float32"), k)
    return [stored_texts[i] for i in I[0] if i < len(stored_texts)]
sorted_texts = sorted(stored_texts)

