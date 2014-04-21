$(document).ready(init);

function init(){
    init_mask();
}

var $img_box = $('#img-box'),
    $mask_img = $('#mask img'),
    $mask = $('#mask'),
    $body = $('body'),
    $back = $('#mask #back');
var img_src;
//
function init_mask(){

    //thumbnail images animation
    $('.thumbnail img').click(function(){
        img_src = $(this).attr('alt');
//        $body.css({'backgroundColor':'#666666','opacity':'1'});
        $img_box.stop(true,true).fadeOut(1000,function(){
            $mask_img.attr('src', img_src);
            $($mask_img).load(
                function(){
                    $mask.stop(true,false).animate({'height': '944px'}, 2000,function(){
                        $back.fadeIn(500);
                    });
                }
            );
        });
    });

    // back button animation
    $back.click(function(){
        $(this).fadeOut(500, function(){
            $mask.stop(true,true).animate({height:'0px'}, 2000,function(){
                $img_box.stop(true,true).fadeIn(1000);
            });
        });
    });

}