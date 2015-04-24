# namakweb
* A small, simple page to give a GUI for Salt-API.  
* In the static/js/main.js, please remember to fill in the rootURL of the Salt-API (eg. https://salt.example.com/)
* The authenticated part uses the /run functionality of the Salt-API (CherryPi) https://salt-api.readthedocs.org/en/latest/ref/netapis/all/saltapi.netapi.rest_cherrypy.html#run

## deployment
* Place everything in the static folder in your static path
* The index file in your app folder, put in your app path
* Add the following lines to your salt master config file:

##Sample Config:
```
static: /srv/salt/namakweb/static
static_path: /static
app: /srv/salt/namakweb/app/index.html
app_path: /app
```

