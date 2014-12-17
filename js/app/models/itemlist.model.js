define(['backbone', 'underscore', 'models/item.model'], 
    function (Backbone, _, itemModel) {
    var itemListModel = Backbone.Collection.extend({
        url: function () {
            return this.urlRoot;
        },
        initialize: function () {},
        addNewItem: function () {
            var newItem = new this.model();
            newItem.urlRoot = this.urlRoot;
            this.add(newItem);
            newItem.save();
        },
        model: itemModel
    });
    
    return itemListModel;
});