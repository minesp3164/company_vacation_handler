from django.contrib import auth
from django.contrib.auth.hashers import check_password
from django.http import HttpResponse
from django.shortcuts import render, redirect
from.models  import User


def signup(request):
    if request.method == 'POST':
        res_data = {}
        username = request.POST.get('username')
        password = request.POST.get('password')
        rolename = request.POST.get('role_name')
        comname = request.POST.get('com_name')
        if not(username and password and rolename and comname):
            res_data['error'] = "모든 정보를 입력 하셔야합니다."
        else:
            if User.object.filter(user_name=username).exists():
                res_data['error'] = "이미 가입되어있는 회원입니다."
            else:
                user = User.objects.create_user(
                    user_name=username,
                    role_name=rolename,
                    password=password,
                    com_name=comname,
                )
                auth.login(request, user)
                return redirect('/')
        return redirect(request,'signup')
    return render(request, 'signup')


def login(request):
    if request.method == "POST":
        username = request.POST.get('username',None)
        password = request.POST.get('password',None)

        res_data = {}

        if not username or not password:
            res_data['error'] = '모든 값을 입력하여 주십시오.'
        else:
            user = User.objects.get(uesrname = username)
            if check_password(password, user.password):
                request.session['user'] = user.pk
                return redirect('/')
            else:
                res_data['error'] = '비밀번호가 일치하지 않습니다.'
    elif request.method == "GET":
        return render()


def home(request):
    user_id = request.session.get('uesr')

    if user_id:
        user = User.objects.get(pk=user_id)
        return HttpResponse(f'{user} 로그인 했습니다.')
    return HttpResponse('home')


def logout(request):
    request.session.clear()
    return redirect('/')