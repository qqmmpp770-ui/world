$(function () {
    let bgClass = ['thrill-active', 'kid-active', 'rain-active']

    $('.inner-twotwo .btn button').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        let idx = $(this).index()
        $('.tab-content').hide()
        $('.tab-content').eq(idx).show()

        $('.main-section-bottom')
            .removeClass(bgClass.join(' '))
            // 지우고 배열
            .addClass(bgClass[idx])
            // 넣고
    })

    $('.inner-twotwo .btn button').eq(0).trigger('click') 
    
    let $topBox = $('.top-box');
        let spacer = $('.top-box-spacer');

    $(window).on('scroll', function () {
        // 스크롤할때할일
        if ($(window).scrollTop() > 38) {
            // 만약 스크롤 탑이 38보다 아래일떄/
            $topBox.addClass('fixed');
            
        } else {
            $topBox.removeClass('fixed');
        
        }
    });
})


