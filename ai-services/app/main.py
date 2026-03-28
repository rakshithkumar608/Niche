from fastapi import FastAPI
from app.routes.agent_routes import router

app = FastAPI()

@app.on_event("startup")
def startup_event():
    print("🚀 Startup running (no data load)")

app.include_router(router, prefix="/agent")