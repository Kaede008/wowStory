/*
$(document).ready(function(){
    $('a.tooltip').mouseover(function(e){
        var tooltip = "<div id='tooltip'>" + this.title + "</div>";
        $('body').append(tooltip);
        $('#tooltip').css({
            'position': 'absolute',
            'top': e.pageY + 'px',
            'left': e.pageX + 'px'
        }).show('fast');
    }).mouseout(function(){
            $('#tooltip').remove();
        });
});*/

$(document).ready(function(){

    var myTitle = '';
    var y = 20,
        x = 10;
    $('a.tooltip').hover(function(e){
        myTitle = this.title;
        this.title = '';
        var tooltip = "<div id='tooltip'>" + myTitle + "</div>";
        $('body').append(tooltip);
        $('#tooltip').css({
            'position': 'absolute',
            'top': e.pageY + y + 'px',
            'left': e.pageX + x + 'px'
        }).show('fast');
        $(this).preventDefault();
    },function(){
        this.title = myTitle;
        $('#tooltip').remove();
    });

    $('a.tooltip').mousemove(function(e){
        $('#tooltip').css({
            'top': e.pageY + y + 'px',
            'left': e.pageX + x + 'px'
        });
    });

});
