if (PyroPages.find().count() === 0) {
    PyroPages.insert({
        'path' : '/',
        'title' : 'Home',
        'pageOrder' : '1',
        'contents' : 'This is the home page contents.'
    });
    PyroPages.insert({
        'path' : 'about',
        'title' : 'About',
        'pageOrder' : '2',
        'contents' : 'This is the about page contents.'
    });
    PyroPages.insert({
        'path' : 'contact',
        'title' : 'Contact',
        'pageOrder' : '3',
        'contents' : 'This is the contact page contents.'
    });
};
if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
        'username' : 'admin',
        'password' : 'adminpass',
        'profile' : {'role' : 'administrator'}
    });
};
