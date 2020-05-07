from django.shortcuts import render
from django.http import HttpResponse

posts = [
    {
        'author': 'Tony',
        'title': 'Post 1',
        'content': 'no one likes me',
        'date_posted': 'May 7, 2020'
    },
    {
        'author': 'Peter',
        'title': 'Post 2',
        'content': 'everyone likes me',
        'date_posted': 'May 7, 2020'
    },
]

def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'home/index.html', context)
