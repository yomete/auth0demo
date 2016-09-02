$(function(){
    $("#element").typed({
        stringsElement: $('#typing'),
        typeSpeed: 50,
        callback: function() {
            $('div.hidden').fadeIn(1000).removeClass('hidden');
        }
    });

});
