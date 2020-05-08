from rest_framework import serializers

from tweets.models import Tweets

class TweetsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tweets
        fields = ('user', 'title', 'content')
        