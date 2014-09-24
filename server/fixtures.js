if (PyroPages.find().count() === 0) {
    PyroPages.insert({
        'path' : '/',
        'title' : 'home',
        'pageOrder' : '1',
        'contents' : 'This is the home page contents.'
    });
    PyroPages.insert({
        'path' : 'about',
        'title' : 'about',
        'pageOrder' : '1',
        'contents' : 'This is the about page contents.'
    });
    PyroPages.insert({
        'path' : 'contact',
        'title' : 'contact',
        'pageOrder' : '1',
        'contents' : 'This is the contact page contents.'
    });
};
