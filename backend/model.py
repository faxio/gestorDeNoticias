from pydantic import BaseModel


class Usuarios(BaseModel):
    nombre: str
    correo: str
    password: str
