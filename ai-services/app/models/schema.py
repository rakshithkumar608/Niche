from pydantic import BaseModel


class ScriptRequest(BaseModel):
    niche: str
    tone: str 
    num_scripts: int 