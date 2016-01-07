// var Collection = Backbone.Collection.extend({
//     url: 'https://sunnyork.firebaseio.com/test/page11',
//     initialize: function() {
//         var d = this.fetchData();
//         console.log(d)
//     },
//     fetchData: function() {
//         var ref = new Firebase(this.url);
//         var test;
//         ref.on('value', function(snapshot) {
//             test = snapshot.val();
//         });
//         return test
//     }
// });

// var c = new Collection();



// var M = Backbone.Model.extend({
//     defaults: {
//         testid: 1,
//         title: 'title',
//         date: '20160101'
//     }
// });

// var Collection11 = Backbone.Firebase.Collection.extend({
//     model: M,
//     autoSync: true,
//     url: 'https://sunnyork.firebaseio.com/test/page11'
// });


// var c = new Collection11();
// c.add({testid: 'n100', title: 'title100', date: 20160106});


var app = app || {};

app.TestGridCollection = Backbone.Firebase.Collection.extend({
    model: app.TestGridModel,
    url: 'https://sunnyork.firebaseio.com/test/page11',
    initialize: function() {

    }
});

