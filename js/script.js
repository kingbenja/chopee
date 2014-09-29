$(function(){
    $('html').height($(window).height()); 
    $('.left-accordian .panel .panel-body').last().slideUp();
});

(function(){
    var $timeSpan = 200;
    $('.left-accordian .panel-heading').on('click', panelAccordian);
    
    function panelAccordian(){
        $(this)
            .siblings('.panel-body')
                .slideToggle($timeSpan)
                    .end()
                        .closest('.panel')
                            .siblings('.panel')
                                .find('.panel-body')
                                    .slideUp($timeSpan); 
    }
})();

(function(){  
    $('ul.nav-pills li a').on('click', function(){ 
        var $getId = $(this).attr('href'); 
        var $className = $getId.substring(1); 
        $('.'+$className)
                .removeClass('at-bot')
                    .addClass('at-top')
                        .siblings('div.has')
                            .removeClass('at-top')
                                .addClass('at-bot');
    });
})();