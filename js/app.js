define([
    'jquery'
    ,'lodash'
    ,'backbone'
    ,'L10n/L10n'
    ,'lapter'
    ,'routers/routers'
    //,'mockAjax','mockUrl' //turn on ajax redirect
], function($, _, Backbone, Lapter, L10n, Router){
	//set some important globals
	window.GlobalEvents=window.GlobalEvents||_.extend({}, Backbone.Events);
	window.L10n=L10n; //localization will be a global property
    window.Lapter=Lapter; //adapter to save serialized objects as string to localstorage
	window.App={};
    var initialize = function(){
        window.App = new Router();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});