Template.header.events({
    'click .navitem': function(e) {
        if($('.navbar-toggle').css('display') == 'block' && !$(this).siblings().length){
            $('.navbar-collapse').collapse('toggle');
        }
    }
});
