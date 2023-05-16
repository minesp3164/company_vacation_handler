from django.db import models


class Company(models.Model):
    com_name = models.CharField(max_length=30)


class User(models.Model):
    com_id = models.ForeignKey(Company, primary_key=True, on_delete=models.CASCADE)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)


class Role(models.Model):
    role_id = models.ForeignKey(User, primary_key=True, on_delete=models.CASCADE)
    role_name = models.CharField(max_length=100)


class Vacation(models.Model):
    vacation_id = models.ForeignKey(User, on_delete=models.CASCADE)
    vac_start = models.DateTimeField()
    vac_end = models.DateTimeField()
