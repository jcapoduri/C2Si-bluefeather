define(['backbone', 'underscore', 'models/register.model', 'text!templates/register.tpl.html'], 
    function (Backbone, _, registerModel, tpl) {
    var registerView = Backbone.View.extend({
        initialize: function (opts){
            opts = opts || {};
            this.model = (!opts.model)? new registerModel() : opts.model;
            this.model.on("change", this.render, this);
            this.render();
        },
        render: function () {
            this.$el.empty();
            this.delegateEvents();
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        events: {
            "click input": "edit",
            "click button#submit": "submit"
        },
        edit: function (evt) {
            /*var input = evt.currentTarget,
                inputId = input.id,
                inputValue = input.value;
            switch(inputId){
                case 'userinput':
                    this.model.set("username", inputValue);
                    break;
                case 'passinput':
                    this.model.set("password", inputValue);
                    break;
            };*/
        },
        submit: function (evt) {
            var promise = this.model.save();
            promise.then(
                function () {
                    alert("no te pudiste logear");
                },
                function () {
                    window.location.replace('');
                }                
            );
            evt.preventDefault();
            evt.stopPropagation();
            evt.stopImmediatePropagation();  
        },
        template: _.template(tpl)        
    });
    
    return registerView;
});