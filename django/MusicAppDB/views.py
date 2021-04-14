from django.shortcuts import render
from .forms import RegistrationForm, RetrieveForm
from .models import Users, ArtistAttributes, Artists, Ratings
# Create your views here.

def registration(request):
	reg_form = RegistrationForm
	ret_form = RetrieveForm
	if request.method == 'POST':
		form = RegistrationForm(request.POST)
		if form.is_valid():
			try:
				user = Users.objects.get(username = form.cleaned_data.get("username"))
			except Users.DoesNotExist:
				user = None

			if(user == None and form.cleaned_data.get("username") != ""):
				newUser = Users(username = form.cleaned_data.get("username"), password = form.cleaned_data.get("password"))
				newUser.save()
				reg_form.output = "User " +  form.cleaned_data.get("username") + " created!"
			else:
				reg_form.output = "Username is empty or taken!"

			context = {'reg_form': reg_form, 'ret_form': ret_form}

	else:
		context = {'reg_form': reg_form, 'ret_form': ret_form}

	return render(request, 'MusicAppDB/index.html', context)

def songret(request):
	reg_form = RegistrationForm
	ret_form = RetrieveForm
	if request.method == 'POST':
		form = RetrieveForm(request.POST)
		if form.is_valid():
			ratings = Ratings.objects.get()
			context = {'reg_form': reg_form, 'ret_form': ret_form}

	else:
		context = {'reg_form': reg_form, 'ret_form': ret_form}

	return render(request, 'MusicAppDB/index.html', context)

def artistret(request):
	reg_form = RegistrationForm
	ret_form = RetrieveForm
	if request.method == 'POST':
		form = RetrieveForm(request.POST)
		if form.is_valid():
			pass

	else:
		pass

	context = {'reg_form': reg_form, 'ret_form': ret_form}
	return render(request, 'MusicAppDB/index.html', context)

def index(request):
	reg_form = RegistrationForm
	ret_form = RetrieveForm
	context = {'reg_form': reg_form, 'ret_form': ret_form}
	return render(request, 'MusicAppDB/index.html', context)
