from django.shortcuts import render
from django.http import HttpResponse

profiles = [
    {
        'name': 'Tony',
        'age': '22',
    },
    {
        'name': 'Peter',
        'age': '21',
    },
]

def profile(request):
    context = {
        'profiles': profiles
    }
    return render(request, 'user/index.html', context)