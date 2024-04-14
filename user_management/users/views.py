from rest_framework import viewsets,filters
from .models import User
from .serializers import UserSerializer
from rest_framework import generics


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['first_name', 'last_name', 'position']
  
class UserList(generics.ListAPIView):
    queryset = User.objects.all()  # Obtiene todos los usuarios
    serializer_class = UserSerializer