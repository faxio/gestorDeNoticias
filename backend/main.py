# api
from fastapi import FastAPI, HTTPException
from model import Usuarios
from fastapi.middleware.cors import CORSMiddleware

from database import (
    fetch_one_user,
    fetch_all_user,
    fetch_create_user
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


@app.get("/api/user/{user}", response_model=Usuarios)
async def get_todo_by_nombre(user):
    response = await fetch_one_user(user)
    if response:
        return response
    raise HTTPException(404, f"No existe el usuario con el nombre: {user}")


@app.get("/api/user")
async def get_user():
    response = await fetch_all_user()
    return response


@app.post("/api/todo/", response_model=Usuarios)
async def post_todo(todo: Usuarios):
    response = await fetch_create_user(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")
