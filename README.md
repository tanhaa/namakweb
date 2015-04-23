# namakweb
* A small, simple page to give a GUI for Salt-API.  
* In the static/js/main.js, please remember to fill in the rootURL of the Salt-API (eg. https://salt.example.com/)
* The authenticated part uses the /run functionality of the Salt-API (CherryPi) https://salt-api.readthedocs.org/en/latest/ref/netapis/all/saltapi.netapi.rest_cherrypy.html#run

## deployment
* Place everything in the static folder in your static path
* The index file in your app folder, put in your app path
* define them according to the cherrypy doc:


> static : A filesystem path to static HTML/JavaScript/CSS/image assets.<br>
> static_path : /static<br>
> The URL prefix to use when serving static assets out of the directory specified in the static setting.<br>
> New in version 0.8.2.<br>
> app<br>
> A filesystem path to an HTML file that will be served as a static file. This is useful for bootstrapping a single-page JavaScript app.<br>
> New in version 0.8.2.<br>
> app_path : /app<br>
> The URL prefix to use for serving the HTML file specified in the app setting. This should be a simple name containing no slashes.<br>
> Any path information after the specified path is ignored; this is useful for apps that utilize the HTML5 history API.<br>
> New in version 0.8.2.<br>


