from django.db import models


class Company(models.Model):
    com_id = models.ForeignKey
    com_name = models.CharField(max_length=30)


class Role(models.Model):
    role_name = models.CharField(max_length=100)


class User(models.Model):
    com_id = models.ForeignKey(Company, on_delete=models.CASCADE)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    username = models.CharField(max_length=11)
    password = models.CharField(max_length=100)



class Vacation(models.Model):
    vacation_id = models.ForeignKey(User, on_delete=models.CASCADE)
    vac_start = models.DateTimeField()
    vac_end = models.DateTimeField()
    vac_content = models.CharField(max_length=200)
