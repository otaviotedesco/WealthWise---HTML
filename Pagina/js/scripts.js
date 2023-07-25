$( document ).ready(function() {


  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let aboutSection = $('#sobre-a-empresa');
  let servicesSection = $('#serviços');
  let contactSection = $('#area-contatos');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'menu-empresa') {
      scrollTo = aboutSection;
    } else if(btnId == 'menu-serviços') {
      scrollTo = servicesSection;
    } else if(btnId == 'menu-contatos') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});