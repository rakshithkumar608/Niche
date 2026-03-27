from app.rag.embedder import get_embedding
from app.rag.vector_store import add_to_index

def load_initial_data():
    scripts = [
        "Stop doing cardio like this...",
        "You're wasting money on this investment...",
        "Most students make this mistake..."
    ]

    embeddings = [get_embedding(s) for s in scripts]
    add_to_index(scripts, embeddings)