from fastapi import FastAPI
from app.routes.agent_routes import router

app = FastAPI()

@app.get("/")
def home():
    return {"message": "AI service is running 🚀"}

app.include_router(router, prefix="/agent")