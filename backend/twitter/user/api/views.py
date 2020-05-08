from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView
)

from user.models import User
from .serializers import UserSerializer

# Use this class to sign up for a new user.
class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class DestroyUserView(DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class FilteringUserView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user_name = self.request.query_params.get('user_name', None)
        return User.objects.filter(user_name = user_name)