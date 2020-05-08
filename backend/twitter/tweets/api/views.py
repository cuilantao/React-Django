from django.shortcuts import render
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView
)
from tweets.models import Tweets
from .serializer import TweetsSerializers
# Create your views here.

class CreateTweetsView(CreateAPIView):
    query_set = Tweets.objects.all()
    serializer_class = TweetsSerializers

class GetAllRelatedTweetsView(ListAPIView):
    serializer_class = TweetsSerializers

    def get_queryset(self):
        user_name = self.request.query_params.get('user_name', None)
        all_tweets = Tweets.objects.filter(user = user_name)
        return all_tweets