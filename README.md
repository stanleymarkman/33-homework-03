# 333-homework-03


Initialization of DB from top-level directory:
```bash
cd django \
&& python3 manage.py migrate \
&& python3 manage.py loaddata initial.json \
&& cd ..
```

To run the server, both the django and react servers must be running:
```
cd django
python3 manage.py runserver
```
and in another console window:
```
cd musicrater_react
npm install
npm start
```

Implemented features:
-Sorting of songs by average rating, song name, and artist name
-Input validation

Default usernames:
-Otto
-Amelia-Earhart