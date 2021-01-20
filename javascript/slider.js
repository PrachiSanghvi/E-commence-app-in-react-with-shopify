class slider {
    slider = () => {
        $('.imgslider').slick({

            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: true
        });
    }
}
let sliderObj = new slider();
sliderObj.slider();

class productslider {
    productslider = () => {
        $('.slider_wrap').slick({

            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: true
        });
    }
}
let productsliderObj = new slider();
productsliderObj.slider();
