requirejs.config({
	baseUrl: 'js',
	shim: {
		'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
	},
	paths: {
		underscore: 'vendors/underscore/underscore',
		jquery: 'vendors/jquery/jquery.min',
		handlebars: 'vendors/handlebars/handlebars.amd'
	}
});