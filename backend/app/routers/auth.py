from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.database import supabase

router = APIRouter(prefix="/auth", tags=["auth"])

class RegisterRequest(BaseModel):
    email: str
    password: str
    full_name: str
    role: str

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/register")
async def register(data: RegisterRequest):
    try:
        response = supabase.auth.sign_up({
            "email": data.email,
            "password": data.password,
        })
        user = response.user
        if not user:
            raise HTTPException(status_code=400, detail="Registration failed")

        supabase.table("profiles").insert({
            "id": str(user.id),
            "full_name": data.full_name,
            "role": data.role,
        }).execute()

        return {"message": "Registration successful", "user_id": str(user.id)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/login")
async def login(data: LoginRequest):
    try:
        response = supabase.auth.sign_in_with_password({
            "email": data.email,
            "password": data.password,
        })

        user_id = str(response.user.id)
        profile = supabase.table("profiles").select("*").eq("id", user_id).single().execute()

        return {
            "access_token": response.session.access_token,
            "user": {
                "id": user_id,
                "email": response.user.email,
                "full_name": profile.data.get("full_name", "") if profile.data else "",
                "role": profile.data.get("role", "tenant") if profile.data else "tenant",
            }
        }
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid credentials")