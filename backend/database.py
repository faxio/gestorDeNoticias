from typing import Collection
import motor.motor_asyncio
from model import Usuarios, NoticiasAnalisadas, Categorias, Solicitud, Noticias
import config

enlace = "mongodb+srv://fabio:" + \
    str(config.password) + \
    "@cluster0.io6tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = motor.motor_asyncio.AsyncIOMotorClient(enlace)
database = client.FNNDA
collection = database.Usuarios


async def fetch_one_user(title):
    document = await collection.find_one({"correo": title})
    return document


async def fetch_all_user():
    user = []
    cursor = collection.find({})
    async for document in cursor:
        user.append(Usuarios(**document))
    return user


async def fetch_create_user(Usuario):
    document = Usuario
    result = await collection.insert_one(document)
    return document


async def fetch_one_user_clave(user, passw):
    document = await collection.find_one({"$and": [{"correo": user, "password": passw}]})
    return document


############# Conexión con las noticias #################
collection2 = database.Noticias

# Agregar una noticia


async def fetch_create_analisis(NoticiasAnalisadas):
    document = NoticiasAnalisadas
    result = await collection2.insert_one(document)
    return document

# conseguir todos los analsis


async def fetch_all_analisis():
    noticias = []
    cursor = collection2.find({})
    async for document in cursor:
        noticias.append(NoticiasAnalisadas(**document))
    return noticias


async def fetch_por_categoria(categoria):
    noticias = []
    cursor = collection2.find({"category": {'$regex': categoria}})
    async for document in cursor:
        noticias.append(NoticiasAnalisadas(**document))
    return noticias


async def fetch_por_analista(analista):
    noticias = []
    cursor = collection2.find({"analista": analista})
    async for document in cursor:
        noticias.append(NoticiasAnalisadas(**document))
    return noticias


async def update_noticias(title, analista, analisis):
    await collection2.update_one({"title": title}, {"$set": {"analista": analista, "analisis": analisis}})
    document = await collection2.find_one({"title": title})
    return document


async def agregar_categoria(title, categoria):
    await collection2.update_one({"title": title}, {"$push": {'category': categoria}})
    document = await collection2.find_one({"title": title})
    return document

############# Conexión con las noticias #################
collection3 = database.Categorias


async def fetch_all_categorias():
    categorias = []
    cursor = collection3.find({})
    async for document in cursor:
        categorias.append(Categorias(**document))
    return categorias


async def fetch_create_categoria(categoria):
    document = categoria
    result = await collection3.insert_one(document)
    return document


async def remove_categoria(categoria):
    await collection3.delete_one({"categoria": categoria})
    return True

############# Solicitud de ser analizador ##########
collection4 = database.Solicitud


async def fetch_all_solicitudes():
    solicitudes = []
    cursor = collection4.find({})
    async for document in cursor:
        solicitudes.append(Solicitud(**document))
    return solicitudes


async def fetch_create_solicitud(solicitud):
    document = solicitud
    result = await collection4.insert_one(document)
    return document


async def responder_solicitud(nombre, opcion):
    if opcion == "aceptar":
        await collection.update_one({"nombre": nombre}, {"$set": {"rango": "analista"}})
    await collection4.delete_one({"nombre": nombre})
    return True

collection5 = database.NoticiasSinAnalisis


async def fetch_all_noticias():
    noticias = []
    cursor = collection5.find({})
    async for document in cursor:
        noticias.append(Noticias(**document))
    return noticias


async def fetch_create_noticias(Noticias):
    document = Noticias
    result = await collection5.insert_one(document)
    return document
