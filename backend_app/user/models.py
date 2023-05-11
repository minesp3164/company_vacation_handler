from django.db import models


class User(models.Model):
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)


class Role(models.Model):
    role_id = models.ForeignKey(User,primary_key=True,)
    role_name = models.Charfield(max_length=100)


class Vacation(models.Model):
    vacation_id = models.ForeignKey(User,on_delete=models.CASCADE)
    vac_start = models.DateTimeField()
    vac_end = models.DateTimeField()

class Company(models.Model):

    com_name = models.CharField(max_length=30)