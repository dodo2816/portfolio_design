$().ready((function(){$(".btn-burger").click((function(){$("body").toggleClass("js-nav--open")}))})),$(document).ready((function(){$(".img__list__slide").each((function(t,e){new Swiper($(this),{slidesPerView:"auto",updateOnWindowResize:!0,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}));var t=$(".grid").isotope({itemSelector:".grid-item",masonry:{columnWidth:50,gutter:5}});t.imagesLoaded().progress((function(){t.isotope("layout")})),$(".filter-button-group").on("click","button",(function(){var e=$(this).attr("data-filter");t.isotope({filter:e}),$(".filter-btn").removeClass("is-actived"),$(this).addClass("is-actived")})),$("input,textarea").blur((function(){$(this).val()?$(this).addClass("has-value"):$(this).removeClass("has-value")})),$("input,textarea").each((function(){$(this).val()?$(this).addClass("has-value"):$(this).removeClass("has-value")})),$("input,textarea").focus((function(){$(this).addClass("has-value")}))}));