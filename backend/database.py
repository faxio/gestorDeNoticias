from typing import Collection
import motor.motor_asyncio
from model import Usuarios
import config

enlace = "mongodb+srv://fabio:" + \
    str(config.password) + \
    "@cluster0.io6tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = motor.motor_asyncio.AsyncIOMotorClient(enlace)
database = client.prueba
collection = database.dato1


async def fetch_one_user(title):
    document = await collection.find_one({"nombre": title})
    return document


async def fetch_all_user():
    user = []
    cursor = collection.find({})
    async for document in cursor:
        user.append(Usuarios(**document))
    return user
