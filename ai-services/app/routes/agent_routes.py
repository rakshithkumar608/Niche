from fastapi import APIRouter
from app.models.schema import ScriptRequest
from app.services.script_service import generate_scripts

router =  APIRouter()


@router.post("/generate")
async def generate(data: dict):
    print("🔥 RECEIVED FROM NODE:", data)
    return  generate_scripts(data)