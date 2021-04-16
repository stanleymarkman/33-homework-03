from django.shortcuts import render
from .forms import RegistrationForm, RetrieveForm
from .models import Users, ArtistAttributes, Artists, Ratings
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def registration(request):
	if request.method == 'POST':
		password = request.POST.get("password");
		username = request.POST.get("username");
		print(username);
		try:
			user = Users.objects.get(username = username)
		except Users.DoesNotExist:
			user = None

		if(user == None and username != ""):
			newUser = Users(username = username, password = password)
			newUser.save()
		else:
			return False;
	else:
		return False;

	return True;

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
