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

let navObj = new navbar();
navObj.openindestop();
navObj.openinmobile();