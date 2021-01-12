$(document).ready(function ()
{

$('.imgslider').slick({
 
  slidesToShow: 2,
  slidesToScroll: 2,
   infinite: true,
  arrows: true
});

 // open nav-maga-menu 
  $('.navbar-submenu-list').click(function (e)
  {
    var selectedmenu = $(this).children('div')
    if (selectedmenu.css('display') === 'block') 
    {
      selectedmenu.hide()
    }
    else
    {
      $('.navbar-megamenu').hide()
      selectedmenu.show()
    }
  })
  
   $('.navbar_icon a').on("click",function()
  {
      $('.main-nav').toggle()
      // $('.navbar-image').show();
      // $('.cancel-icon').hide();
      $('.navbar_icon img').addClass('.cancel-icon');
      $('.navbar_icon img').removeClass('.navbar-image');
      
  })
  
   // search-box 
  $('.search-image').click(function (e)
  {
    $('.searchoption').toggle()
  })
  $('.cancel-icon').click(function (e)
  {
    $('.searchoption').hide()
  })

  $('.shop-btn').click(function (e)
  {
    $('.navbar-megamenu').toggle()
  })
  

  
})