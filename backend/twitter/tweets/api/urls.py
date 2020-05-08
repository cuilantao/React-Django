from django.urls import path
from .views import (
    CreateTweetsView,
    GetAllRelatedTweetsView
)

urlpatterns = [
    path('create_tweets', CreateTweetsView.as_view()),
    path('all_tweets', GetAllRelatedTweetsView.as_view())
]