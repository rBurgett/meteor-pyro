if (PyroPages.find().count() === 0) {
  PyroPages.insert({
    'title': 'home',
    'element': 'This is the first page element.'
  });
};
