$('.animated-menu-icon').on('click', function () {
    $('.data').toggle();
    $('.animated-menu-icon').toggleClass('open');
})
$('.position-relation-common').hover(mouseEnter, mouseLeave);

function mouseEnterStpl() {
    $('#drp-div-stpl').removeClass('display-none-stpl');
}

function mouseLeaveStpl() {
    $('#drp-div-stpl').addClass('display-none-stpl');
}

$('#stpl-li').hover(mouseEnterStpl, mouseLeaveStpl);

$('#mob-stpl-div').hide()
$('#mob-stpl').on('click', function () {
    $('#mob-stpl-div').toggle();
    $('#mob-stpl').toggleClass('rotate-icon-stpl');
})

$('#mob-stpl-post-div').hide()
$('#mob-stpl-post').on('click', function () {
    $('#mob-stpl-post-div').toggle();
    $('#mob-stpl-post').toggleClass('rotate-icon-stpl-post');
})

function mouseEnter() {
    $('.p-category').removeClass('display-none');
}

function mouseLeave() {
    $('.p-category').addClass('display-none');
}
$('.sub-cat-data').hide()
$('.mobile-sub-cat').on('click', function () {
    $('.sub-cat-data').toggle();
    $('.mobile-sub-cat').toggleClass('rotate-icon');
})
$('.l-m-hidden-div').hide()
$('.l-m-content').on('click', function () {
    $('.l-m-hidden-div').toggle();
    $('.l-m-content-arrow').toggleClass('open');
})
$(document).ready(function () {
    $('.accordion-listÂ >Â liÂ >Â .answer').hide();
    $('.accordion-listÂ >Â li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-listÂ >Â li.activeÂ .answer").slideUp();
            $(".accordion-listÂ >Â li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });
});

$(window).on('load', function () {
    $('.mob-footer .accordion-list li').click(function () {
        console.debug();
        var r = $(this).find("div.answer")
        var s = $(r).css("display")
        var a = this;
        $(this).toggleClass("active")
        if (s == "none") {
            $('.mob-footer .accordion-list li').not(a).each(function () {
                $(this).find("div.answer").css("display", "none")
                $(this).removeClass("active")
            })
            $(r).css("display", "")
            $(this).addClass("active")
        }
        else
            $(r).css("display", "none")        
    });
});

//$('.mob-footer .accordion-list li').click(function () {
//    var r = $(this).find("div.answer")
//    var s = $(r).css("display")
//    var a = this;
//    if (s == "none") {
//        $('.mob-footer .accordion-list li').not(a).each(function () {
//            $(this).find("div.answer").css("display", "none")
//        })
//        $(r).css("display", "")

//    }
//    else
//        $(r).css("display", "none")
//});
