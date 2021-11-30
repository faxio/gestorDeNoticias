# api
from fastapi import FastAPI, HTTPException
from model import Usuarios, NoticiasAnalisadas
from fastapi.middleware.cors import CORSMiddleware

from database import (
    fetch_one_user,
    fetch_all_user,
    fetch_create_user,
    fetch_one_user_clave,
    fetch_create_analisis,
    fetch_all_analisis,
    fetch_por_categoria
)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

'''
@app.get("/api/user/{user}", response_model=Usuarios)
async def get_todo_by_nombre(user):
    response = await fetch_one_user(user)
    if response:
        return response
    raise HTTPException(404, f"No existe el usuario con el nombre: {user}")
'''


@app.get("/api/user/{user}", response_model=Usuarios)
async def get_todo_by_correo(user: str, passw: str):
    response = await fetch_one_user_clave(user, passw)
    if response:
        return response
    raise HTTPException(404, f"No existe el usuario con el nombre: {user}")


@app.get("/api/user")
async def get_user():
    response = await fetch_all_user()
    return response


@app.post("/api/user/", response_model=Usuarios)
async def post_todo(todo: Usuarios):
    response = await fetch_create_user(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

#####################################################
# Noticias
@app.post("/api/noticias/", response_model=NoticiasAnalisadas)
async def post_noticias(todo: NoticiasAnalisadas):
    response = await fetch_create_analisis(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.get("/api/noticias")
async def get_noticias():
    response = await fetch_all_analisis()
    return response

@app.get("/api/noticias/{category}", response_model=NoticiasAnalisadas)
async def get_noticia_categoria(categoria: str):
    response = await fetch_por_categoria(categoria)
    return response