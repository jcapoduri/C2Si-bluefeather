define(['backbone', 'underscore', 'models/itemlist.model'], 
    function (Backbone, _, itemListModel) {
    var todoModel = Backbone.Model.extend({
        url: function () {
            if (this.isNew()) return this.urlRoot
            return this.urlRoot + '/' + this.id;
        },
        urlRoot: 'api/todo',
        initialize: function (){
        },
        defaults: {
            title: "Nuevo titulo",
            items: new itemListModel()
        },
        parse: function (data, otps) {
            var items = this.get("items");
            if (typeof data.items == "object" && data.items.href) {
                if (!items) items = new itemListModel();
                items.urlRoot = data.items.href;
                items.fetch();
                data.items = items;
            };
            return data;
        },
        addNewItem: function () {
            this.get("items").addNewItem();
        }
    });
    
    return todoModel;
});