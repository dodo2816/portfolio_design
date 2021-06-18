$().ready(function(){
    $('.btn-burger').click(function(){
        $('body').toggleClass('js-nav--open');
    });
});

$(document).ready(function () {
    $('.img__list__slide').each(function (index, element) {

        var mySwiper = new Swiper($(this), {
            //swiper paramenters here 
            slidesPerView: 'auto',
            updateOnWindowResize: true,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
        // mySwiper.pagination.$el.addClass('MyClass'); 
    });

    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        masonry: {
            columnWidth: 50,
            gutter: 5
        }
    }); 
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-btn').removeClass('is-actived');
        $(this).addClass('is-actived');
    });


    $('input,textarea').blur(function(){
        if ($(this).val()) {
            $(this).addClass('has-value');
        } else {
            $(this).removeClass('has-value');
        }
    });
    $('input,textarea').each(function(){
        if ($(this).val()) {
            $(this).addClass('has-value');
        } else {
            $(this).removeClass('has-value');
        }
    });
    $('input,textarea').focus(function() {
        $(this).addClass('has-value');
    });
    //form value end


});


