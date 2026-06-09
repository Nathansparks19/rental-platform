from fastapi import APIRouter, HTTPException, Header
from pydantic import BaseModel
from typing import Optional, List
from app.database import supabase

router = APIRouter(prefix="/properties", tags=["properties"])

class PropertyCreate(BaseModel):
    title: str
    description: str
    location: str
    price: int
    beds: int
    baths: int
    type: str
    amenities: List[str]
    image_url: Optional[str] = None

@router.get("/")
async def get_properties():
    try:
        response = supabase.table("properties").select("*").eq("active", True).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/{property_id}")
async def get_property(property_id: str):
    try:
        response = supabase.table("properties").select("*").eq("id", property_id).single().execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=404, detail="Property not found")

@router.post("/")
async def create_property(data: PropertyCreate, authorization: str = Header(...)):
    try:
        token = authorization.replace("Bearer ", "")
        user = supabase.auth.get_user(token)
        landlord_id = str(user.user.id)

        response = supabase.table("properties").insert({
            "landlord_id": landlord_id,
            "title": data.title,
            "description": data.description,
            "location": data.location,
            "price": data.price,
            "beds": data.beds,
            "baths": data.baths,
            "type": data.type,
            "amenities": data.amenities,
            "image_url": data.image_url,
        }).execute()

        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.delete("/{property_id}")
async def delete_property(property_id: str, authorization: str = Header(...)):
    try:
        token = authorization.replace("Bearer ", "")
        user = supabase.auth.get_user(token)
        landlord_id = str(user.user.id)

        supabase.table("properties").delete().eq("id", property_id).eq("landlord_id", landlord_id).execute()
        return {"message": "Property deleted"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))