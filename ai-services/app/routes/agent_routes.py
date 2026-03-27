from fastapi import APIRouter
from app.models.schema import ScriptRequest
from app.services.script_service import generate_scripts

router =  APIRouter()


@router.post("/generate")
def generate(data: ScriptRequest):
    result = generate_scripts(data.dict())
    return result