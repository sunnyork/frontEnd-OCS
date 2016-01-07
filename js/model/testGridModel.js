// var M = Backbone.Model.extend({
//     defaults: {
//         testid: 1,
//         title: 'title',
//         date: '20160101'
//     }
// });

var app = app || {};

app.TestGridModel = Backbone.Model.extend({
    defaults: {
        testid: 1,
        title: 'title',
        date: '20160101'
    }
});