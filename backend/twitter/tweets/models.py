from django.db import models
# Create your models here.
class Tweets(models.Model):
    user =  models.CharField(max_length = 100)
    title = models.CharField(max_length = 120)
    content = models.CharField(max_length = 10000)

    def __str__(self):
        return self.content