from fastapi import APIRouter

from app.services.estimate import EstimateRequest, EstimateResponse, generate_estimate

router = APIRouter(prefix="/estimate", tags=["estimate"])


@router.post("", response_model=EstimateResponse)
async def create_estimate(payload: EstimateRequest) -> EstimateResponse:
    return await generate_estimate(payload)
