from fastapi import APIRouter, HTTPException, Header
from pydantic import BaseModel
from app.database import supabase

router = APIRouter(prefix="/applications", tags=["applications"])

class ApplicationCreate(BaseModel):
    property_id: str

@router.post("/")
async def create_application(data: ApplicationCreate, authorization: str = Header(...)):
    try:
        token = authorization.replace("Bearer ", "")
        user = supabase.auth.get_user(token)
        tenant_id = str(user.user.id)

        response = supabase.table("applications").insert({
            "tenant_id": tenant_id,
            "property_id": data.property_id,
            "status": "pending",
        }).execute()

        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/mine")
async def get_my_applications(authorization: str = Header(...)):
    try:
        token = authorization.replace("Bearer ", "")
        user = supabase.auth.get_user(token)
        tenant_id = str(user.user.id)

        response = supabase.table("applications").select("*, properties(*)").eq("tenant_id", tenant_id).execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.patch("/{application_id}")
async def update_application(application_id: str, status: str, authorization: str = Header(...)):
    try:
        token = authorization.replace("Bearer ", "")
        user = supabase.auth.get_user(token)

        response = supabase.table("applications").update({"status": status}).eq("id", application_id).execute()
        return response.data[0]
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))