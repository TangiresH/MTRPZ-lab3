from fastapi import APIRouter
import numpy as nmp


router = APIRouter()


@router.get('/mtrx')
def matrix() -> dict:
    matrix_a = nmp.random.rand(10, 10)
    matrix_b = nmp.random.rand(10, 10)
    product = nmp.dot(matrix_a, matrix_b)

    result = {
        "matrix_a": matrix_a.tolist(),
        "matrix_b": matrix_b.tolist(),
        "product": product.tolist()
    }

    return result
