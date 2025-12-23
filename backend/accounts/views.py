from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer


# ===================== REGISTER =====================
@api_view(['POST'])
def register(request):
    full_name = request.data.get('full_name')
    email = request.data.get('email')
    password = request.data.get('password')

    if not full_name or not email or not password:
        return Response(
            {"message": "All fields are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(email=email).exists():
        return Response(
            {"message": "User already exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = User.objects.create(
        full_name=full_name,
        email=email,
        password=password  # ⚠️ plain text (for now)
    )

    serializer = UserSerializer(user)

    return Response(
        {"message": "Registration successful", "user": serializer.data},
        status=status.HTTP_201_CREATED
    )


# ===================== LOGIN =====================
@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if not email or not password:
        return Response(
            {"error": "Email and password are required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.get(email=email, password=password)
        return Response(
            {
                "message": "Login successful",
                "user": {
                    "email": user.email,
                    "full_name": user.full_name
                }
            },
            status=status.HTTP_200_OK
        )
    except User.DoesNotExist:
        return Response(
            {"error": "Invalid email or password"},
            status=status.HTTP_401_UNAUTHORIZED
        )
