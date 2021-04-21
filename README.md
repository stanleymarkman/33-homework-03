# 333-homework-03

To run the server, both the django and react servers must be running.

Initialization and starting of DB from top-level directory:
```bash
cd django \
&& python3 manage.py migrate \
&& python3 manage.py loaddata initial.json \
&& python3 manage.py runserver
```

and in another console window:
```bash
cd musicrater_react \
&& npm install \
&& npm start
```

Implemented features:
-Sorting of songs by average rating, song name, and artist name
-Input validation

Default usernames:
-Otto
-Amelia-Earhart
