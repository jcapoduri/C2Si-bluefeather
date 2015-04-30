define(['backbone', 'underscore'], function (Backbone, _) {
    var itemModel = Backbone.Model.extend({
        url: function () {
            debugger;
            if (this.isNew()) return this.collection.urlRoot
            return this.collection.urlRoot + '/' + this.id;
        },
        defaults: {
            done: false,
            title: "nuwvo item"
        },
        parse: function (response, opts) {            
            response.done = response.done !== "0";
            return response;
        },
        checked: function () {
            if (this.done) return "checked";
            return "";
        }
    });
    
    return itemModel;
});