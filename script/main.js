/**
 * Created by Kaede on 13-12-26.
 */
(function($){
    $(document).ready(init);
    $(window).load();

    var $nav_para = $('nav p');//

    function init(){
        init_animation();
        setReplay();
    }

    //init nav text animation
    function init_animation(){
        i = 0;
        animation();
    }

    //nav text animation
    var delay_time = 3000,
        temp;
    var i = 0;
    var delay = [];
    function animation(){
        if ( i < $nav_para.length ){
            temp =  ':eq(' + i + ')';
            console.log(temp);
            if ( i < $nav_para.length - 1 ){
                $nav_para.filter(temp).fadeIn(1000).delay(1000).fadeOut(1000);
                delay[i] = setTimeout(function(){
                        animation();
                    }
                    , delay_time);
            }
            else{
                $nav_para.filter(temp).fadeIn(1000);
                console.log('End.');
            }

            i = i + 1;
        }

    }

    //set nav text Replay
    function setReplay(){
        $nav_para.click(function(){
            for (var j=0;j<$nav_para.length;j++){
                temp =  ':eq(' + j + ')';
                $nav_para.filter(temp).stop(true,true).css('display', 'none');//停止所有动画并隐藏
                clearTimeout(delay[j]);
            }
            init_animation();
        });

    }

})(jQuery);