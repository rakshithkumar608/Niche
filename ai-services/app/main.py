from fastapi import FastAPI
from app.routes.agent_routes import router
from app.rag.init_data import load_initial_data


app = FastAPI()

@app.on_event("startup")
def startup_event():
    print("Loading RAG initial data...")
    load_initial_data()

app.include_router(router, prefix="/agent")