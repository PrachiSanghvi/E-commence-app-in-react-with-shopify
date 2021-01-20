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
// open nav-maga-menu 
class navbar {
  openindestop = () => {
    $('.navbar-submenu-list').click(function (e) {
      var selectedmenu = $(this).children('div')
      if (selectedmenu.css('display') === 'block') {
        selectedmenu.hide()
      }
      else {
        $('.navbar-megamenu').hide()
        selectedmenu.show()
      }
    })
  }
  openinmobile = () => {
    $('.navbar_icon a').on("click", function () {
      $('.main-nav').toggle()
      // $('.navbar-image').show();
      // $('.cancel-icon').hide();
      $('.navbar_icon img').addClass('.cancel-icon');
      $('.navbar_icon img').removeClass('.navbar-image');

    })
  }
}

class searchbox {
  searchbox = () => {
    // search-box 
    $('.search-image').click(function (e) {
      $('.searchoption').toggle()
    })
    $('.cancel-icon').click(function (e) {
      $('.searchoption').hide()
    })

    $('.shop-btn').click(function (e) {
      $('.navbar-megamenu').toggle()
    })
  }

}
let sliderObj=new slider();
sliderObj.slider();

let navObj=new navbar();
navObj.openindestop();
navObj.openinmobile();

let searchboxObj=new searchbox();
searchboxObj.searchbox();
