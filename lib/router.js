Router.configure({
	layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('pyroPages'); }
});
Router.map(function() {
	this.route('home', {
        path: '/',
        onBeforeAction: function () {
        },
        onAfterAction: function() {
            document.title = 'Meteor-Pyro';
//            document.title = Pages.find('title': 'home';
        }
    });
});
Router.onBeforeAction('loading');
