// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jQuery": "jquery-1.9.1",
      "jQueryUI": "jquery-ui-1.10.3.custom",
      "backbone": "backbone-min",
      "underscore": "underscore-min",
      "bootstrap" : "bootstrap.min"

    }, shim: { 
        "jQueryUI": {
            export:"$" ,
            deps: ['jQuery']
        },
        "backbone":{
          export:"bb",
          deps: ['underscore']
        }
    }
});

// Load the main app module to start the app
requirejs(["app/main"], function(App){
	App.initialize();
});