# api
from fastapi import FastAPI, HTTPException
from model import Usuarios, NoticiasAnalisadas, Categorias, Solicitud, Noticias
from fastapi.middleware.cors import CORSMiddleware

from database import (
    fetch_one_user,
    fetch_all_user,
    fetch_create_user,
    fetch_one_user_clave,
    fetch_create_analisis,
    fetch_all_analisis,
    fetch_por_categoria,
    fetch_por_analista,
    update_noticias,
    fetch_all_categorias,
    fetch_create_categoria,
    remove_categoria,
    agregar_categoria,
    fetch_all_solicitudes,
    responder_solicitud,
    fetch_create_solicitud,
    fetch_all_noticias,
    fetch_create_noticias
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
async def get_user_by_correo(user: str, passw: str):
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


@app.get("/api/noticias/{category}")
async def get_noticia_categoria(category: str):
    response = await fetch_por_categoria(category)
    return response

'''
@app.get("/api/noticias/v2/{analista}")
async def get_noticia_analista(analista: str):
    response = await fetch_por_analista(analista)
    return response
'''


@app.put("/api/noticias/{title}", response_model=NoticiasAnalisadas)
async def put_noticia(title: str, analista: str, analisis: str):
    response = await update_noticias(title, analista, analisis)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")


@app.put("/api/noticiasC/{title}", response_model=NoticiasAnalisadas)
async def put_noticia(title: str, category: str):
    response = await agregar_categoria(title, category)
    if response:
        return response
    raise HTTPException(404, f"There is no todo with the title {title}")
#############################################################################
# Categorias


@app.get("/api/categorias/")
async def get_categorias():
    response = await fetch_all_categorias()
    return response


@app.post("/api/categorias/", response_model=Categorias)
async def post_categorias(todo: Categorias):
    response = await fetch_create_categoria(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.delete("/api/categorias/{categoria}")
async def delete_categoria(categoria):
    response = await remove_categoria(categoria)
    if response:
        return "Eliminado Correctamente"
    raise HTTPException(404, f"No existe: {categoria}")

#########################################################
# Solicitudes


@app.get("/api/solicitudes/")
async def get_solicitudes():
    response = await fetch_all_solicitudes()
    return response


@app.post("/api/solicitudes/", response_model=Solicitud)
async def post_solicitud(todo: Solicitud):
    response = await fetch_create_solicitud(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.delete("/api/solicitudes/{solicitud}")
async def eliminar_solicitud(solicitud: str, opcion: str):
    response = await responder_solicitud(solicitud, opcion)
    if response:
        return "Solicitud resuelta correctamente"
    raise HTTPException(404, f"No existe: {solicitud}")


@app.post("/api/noticiasin/", response_model=Noticias)
async def post_noticias_sin_analisis(todo: Noticias):
    response = await fetch_create_noticias(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.get("/api/noticiasin")
async def get_noticias():
    response = await fetch_all_noticias()
    return response
