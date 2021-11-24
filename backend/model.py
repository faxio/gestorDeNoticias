from pydantic import BaseModel


class Usuarios(BaseModel):
    nombre: str
    apellido: str
