from pydantic import BaseModel


class ScriptRequest(BaseModel):
    niche: str
    tone: str = "engaging"
    num_scripts: int = 10