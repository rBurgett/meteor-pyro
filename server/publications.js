Meteor.publish('pyroPages', function() {
    return PyroPages.find();
});
