$(document).ready(function(){

    var i = 1;
    
    var num = $('.cirle').attr('data-index');
    $('.circle').each(function(index){
        $(this).attr({
            'data-index':index
        });
    });
    $('.section1 .arrowRBtn').click(function(){
        i++;
        if(i>2){
            i=2;
        }
        console.log(i);
        if(i==2){
            $('.section1 .con_wrap').animate({
                left:-51*i+'%'})
        }
        $('.section1 .circle').eq(0).addClass('circleOff');
        $('.section1 .circle').eq(1).removeClass('circleOff');
    })
    $('.section1 .arrowLBtn').click(function(){
        i--;
        if(i<1){
            i=1;
        }
        console.log(i);
        $('.section1 .con_wrap').animate({
            left:0})
            $('.section1 .circle').eq(1).addClass('circleOff');
            $('.section1 .circle').eq(0).removeClass('circleOff');
    })

    // 섹션1 중간 사이즈 버튼액션 end
    $('.section1 .arrowRBtn2').click(function(){
        if(i==1){
            $('.section1 .con_wrap').animate({
                left:-100+'%'})
        }
        i++;
        if(i>4){
            i=4;
        }
        console.log(i);
        
        if(i>2){
            $('.section1 .con_wrap').animate({
                left:-100*(i-1)+'%'})
        }
        $('.section1 .circle').addClass('circleOff');
        $('.section1 .circle').eq((i+1)).removeClass('circleOff');
    })
    $('.section1 .arrowLBtn2').click(function(){
        if(i==2){
            $('.section1 .con_wrap').animate({
                left:0})
                $('.section1 .circle').addClass('circleOff');
                $('.section1 .circle').eq(i).removeClass('circleOff');
        }
        i--;
        console.log(i);
        if(i<1){
            i=1
        }
        if(i>1){
            $('.section1 .con_wrap').animate({
                left:-100*(i-1)+'%'})
                $('.section1 .circle').addClass('circleOff');
                $('.section1 .circle').eq(i+1).removeClass('circleOff');
        }
        
    })
    // 섹션1 모바일 사이즈 버튼액션 end
    // 섹션3 버튼 start
    var a = 1;
    
    var num = $('.cirle').attr('data-index');
    $('.section3 .circle').each(function(index){
        $(this).attr({
            'data-index':index
        });
    });
    $('.section3 .arrowRBtn').click(function(){
        a++;
        if(a>2){
            a=2;
        }
        console.log(a);
        if(a==2){
            $('.section3 .con_wrap').animate({
                left:-51*a+'%'})
        }
        $('.section3 .circle').eq(0).addClass('circleOff');
        $('.section3 .circle').eq(1).removeClass('circleOff');
    })
    $('.section3 .arrowLBtn').click(function(){
        a--;
        if(a<1){
            a=1;
        }
        console.log(a);
        $('.section3 .con_wrap').animate({
            left:0})
            $('.section3 .circle').eq(1).addClass('circleOff');
            $('.section3 .circle').eq(0).removeClass('circleOff');
    })

    // 섹션2 중간 사이즈 버튼액션 end
    $('.section3 .arrowRBtn2').click(function(){
        if(a==1){
            $('.section3 .con_wrap').animate({
                left:-100+'%'})
        }
        a++;
        if(a>3){
            a=3;
        }
        console.log(a);
        
        if(a>2){
            $('.section3 .con_wrap').animate({
                left:-100*(a-1)+'%'})
        }
        $('.section3 .circle').addClass('circleOff');
        $('.section3 .circle').eq((a+1)).removeClass('circleOff');
    })
    $('.section3 .arrowLBtn2').click(function(){
        if(a==2){
            $('.section3 .con_wrap').animate({
                left:0})
                $('.section3 .circle').addClass('circleOff');
                $('.section3 .circle').eq(a).removeClass('circleOff');
        }
        a--;
        console.log(a);
        if(a<1){
            a=1
        }
        if(a>1){
            $('.section3 .con_wrap').animate({
                left:-100*(a-1)+'%'})
                $('.section3 .circle').addClass('circleOff');
                $('.section3 .circle').eq(a+1).removeClass('circleOff');
        }
        
    })


});//end