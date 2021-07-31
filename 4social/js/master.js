// Nav Menu Mobile
$ ('img').on('mousedown', function () {
  return false;
});

$ ('a').on('mousedown', function () {
  return false;
});

// Details Update start
// Close

$ ('.details-item').find('.details-content').animate({'margin-bottom': -(($ ('.details-item').find('.details-content').height() * 100 / window.innerWidth) + 2) + 'vw'}, 0);

$ ('.details-item').on('click', function () {
  if ($ (this).find('.details-content').css('margin-bottom') == '0px') {
    // Close
    $ (this).css('background-color', '#fff');
    $ (this).find('.details-head').find('.details-icon').css({'transform': 'rotate(0deg)'}, 500);
    $ (this).find('.details-content').animate({'margin-bottom': -(($ (this).find('.details-content').height() * 100 / window.innerWidth) + 2) + 'vw'}, 500);
  } else {
    // Open
    $ (this).css('background-color', '#f2f2f9');
    $ (this).find('.details-head').find('.details-icon').css({'transform': 'rotate(180deg)'}, 500);
    $ (this).find('.details-content').animate({'margin-bottom': 0}, 500);
  }
});

// Details Update end

var myNav__isVisible = $ ('.my-nav__is-visible');
var myNav__item = $ ('.my-nav__item');
var myNav__link = $ ('.my-nav__link');
var myNav__link_close = $ ('.my-toggler-link_phone-close');
var modalWindow = $ ('.modal-window');

myNav__link.on('click', function (e) {
  e.preventDefault();
});

function initMobileMenu ()
{
  myNav__isVisible.css({top: '-85vw', opacity: 0}, { queue: false });
  myNav__link_close.on('click', function (e) {
    e.preventDefault();

    myNav__isVisible.animate({top: '-85vw'}, { duration: 590});
    myNav__isVisible.animate({opacity: 0}, {duration: 590, queue: false });
    myNav__isVisible.animate({'z-index': -11}, 1);
  });
  $ ('.my-toggler-link_phone').on('click', function (e) {
    e.preventDefault();


    myNav__isVisible.animate({'z-index': 6969999999999999999}, 1);
    myNav__isVisible.animate({top: '0'}, { duration: 590});
    myNav__isVisible.animate({opacity: 1}, {duration: 590, queue: false });
  });

  $('.external').click(function(e){
    var targetLink = $(this).attr('href');
    window.location.href = targetLink;
});
  // });
}

$ ('img').on('mousedown', function () {
  return false;
});

$ ('.no-event').on('click', function (e) {
  e.preventDefault();
});

// Scroll To
function scrto(id) {
            try {
			document.getElementById(id).scrollIntoView({
				block: 'start',
				behavior: 'smooth'
			});
      myNav__isVisible.animate({top: '-85vw'}, { duration: 590});
      myNav__isVisible.animate({opacity: 0}, {duration: 590, queue: false });
      myNav__isVisible.animate({'z-index': -11}, 1);
         } catch (err) {
             window.scrollTo(0, 0);
             console.log('No ID o scroll');
         }

       }
// Modal Window
  function initModalWindow () {
    $ ('#modal-close').on('click', function (e) {
      e.preventDefault();

      modalWindow.animate({opacity: 0}, {duration: 900});
      setTimeout(function () {
        $('html').css('overflow-y', 'scroll');
        modalWindow.css('display', 'none');
      }, 900);
    });

    $ ('.modal-open').on('click', function (e) {
      e.preventDefault();

      $('html').css('overflow-y', 'hidden');
      modalWindow.css('display', 'flex');
      modalWindow.animate({opacity: 1}, {duration: 500, queue: false });
    });
  }
// Modal Window

initModalWindow ();
initMobileMenu ();

// Preloader
$ (document).ready(function () {
  scrto('none');


  if (window.matchMedia("(max-width: 768px)").matches) {
    $ ('.float-planc').css({transition: 'all 1s'});

    if ($ (window).scrollTop() > 800) {
      $ ('.float-planc').css({top: '0vw'});
    }

    if ($ (window).scrollTop() <= 800) {
      $ ('.float-planc').css({top: '-20vw'});
    }
  } else {

      $ ('.float-planc').css({transition: 'all 1s'});

      if ($ (window).scrollTop() > 800) {
        $ ('.float-planc').css({top: '0vw'});
      }

      if ($ (window).scrollTop() <= 800) {
        $ ('.float-planc').css({top: '-12vw'});
      }
  }



  setTimeout (function() {
    $('#preloader').fadeOut(1000);
  }, 50);

  if (window.matchMedia("(max-width: 768px)").matches) {

        $('#viewport').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 6000,
          arrows: true
        });

   } else {

     $('#viewport').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 2000,
       arrows: true
     });

   }
});

$ (window).resize(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {

    $('#viewport').slick('unslick');


    $('#viewport').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      // autoplaySpeed: 6000,
      arrows: true
    });

   } else {
     $('#viewport').slick('unslick');

     $('#viewport').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: false,
      //  autoplaySpeed: 2000,
       arrows: true
     });
   }
});

// Nav TOggle
  $ ('.my-nav-link').on('click', function (e) {
    e.preventDefault();
  });

 $ ('.my-nav-item').css('transition', 'all 1s');

$ (document).ready (function () {

var closedIMG = '<img src="img/main/mm-opener.svg"  alt="mm-open">';
var openedIMG = '<img src="img/main/mm-closer.svg" alt="mm-close">';

$ ('.my-toggler-link').on('click', function () {

  if ($ (this).html() == openedIMG) {
    $ ('.my-nav-item').animate({'opacity': 0});
    $ ('.my-nav-item').css('z-index', -10);

    $ ('.my-toggler-link').css('opacity', 0);
    setTimeout (function () { $ ('.my-toggler-link').html(closedIMG); }, 500);
     $ ('.my-toggler-link').css('opacity', 1);

  } else {
    $ ('.my-nav-item').animate({'opacity': 1});
    $ ('.my-nav-item').css('z-index', 1);

    $ ('.my-toggler-link').css('opacity', 0);
    setTimeout (function () { $ ('.my-toggler-link').html(openedIMG); }, 500);
    $ ('.my-toggler-link').css('opacity', 1);
  }

});

var windowHeight = $(window).height();

$ (window).scroll(function () {

  if ($ (window).scrollTop() > 800) {
    $ ('.float-planc').css({top: '0vw'});
  }

  if ($ (window).scrollTop() <= 800) {
    $ ('.float-planc').css({top: '-12vw'});
  }




  $('#power, #opps, #items, #nosurprices, #contacts').each(function(index) {
			var self = $(this),
			height = self.offset().top + self.height()/2 - windowHeight/2;
			if ($(document).scrollTop() >= height - 300 && $(document).scrollTop() <= height + self.height() - 300) {
			  if (index + 1 == 1) {
          $ ('.my-nav-item-float a:eq(0)').css('color', '#CB7CAF');
        }
        if (index + 1 == 2) {
          $ ('.my-nav-item-float a:eq(1)').css('color', '#CB7CAF');
        }
        if (index + 1 == 3) {
          $ ('.my-nav-item-float a:eq(2)').css('color', '#CB7CAF');
        }
        if (index + 1 == 4) {
          $ ('.my-nav-item-float a:eq(3)').css('color', '#CB7CAF');
        }
        if (index + 1 == 5) {
          $ ('.my-nav-item-float a:eq(4)').css('color', '#CB7CAF');
        }
			} else {
        if (index + 1 == 1) {
          $ ('.my-nav-item-float a:eq(0)').css('color', '#2A2E5E');
        }
        if (index + 1 == 2) {
          $ ('.my-nav-item-float a:eq(1)').css('color', '#2A2E5E');
        }
        if (index + 1 == 3) {
          $ ('.my-nav-item-float a:eq(2)').css('color', '#2A2E5E');
        }
        if (index + 1 == 4) {
          $ ('.my-nav-item-float a:eq(3)').css('color', '#2A2E5E');
        }
        if (index + 1 == 5) {
          $ ('.my-nav-item-float a:eq(4)').css('color', '#2A2E5E');
        }
      }
		});

});

// mm-toggler mm-close
// Nav TOggle



// SWRTGG
var isSended;
var debuger = 9;

$ ('.thank-block__close a').click(function (e) {
  e.preventDefault();
  $ ('.thank-block').animate({opacity: 0}, 500);
  setTimeout(function (){ $ ('.thank-block').addClass('hidden'); }, 600);
});


function showThank() {
  $ ('.thank-block').removeClass('hidden');
  $ ('.thank-block').animate({opacity: 1}, 500);
  scrto('none');
}

if (window.location.href.indexOf("#header") != -1) {
  scrto('header');
}

  if (window.location.href.indexOf("#trust") != -1) {
  scrto('trust');
}

  if (window.location.href.indexOf("#power") != -1) {
  scrto('power');
}

     if (window.location.href.indexOf("#opps") != -1) {
  scrto('#opps');
}

   if (window.location.href.indexOf("#items") != -1) {
  scrto('items');
}

  if (window.location.href.indexOf("#nosurprices") != -1) {
  scrto('nosurprices');
}


    if (window.location.href.indexOf("#form-section") != -1) {
  scrto('form-section');
}
    if (window.location.href.indexOf("#contacts") != -1) {
  scrto('contacts');
}
    if (window.location.href.indexOf("#footer") != -1) {
  scrto('footer');
}





if (window.location.href.indexOf("#thanks") != -1) {
  showThank();
}




$ ('.form-submit').on('click', function (e) {

  e.preventDefault();

  var formName = $ ('#a-name').val();
  var formPhone = $ ('#a-phone').val();

  function send () {
    $.ajax ({

      url: 'cgi/sendform.php',
      data: {sname: formName, sphone: formPhone},
      dataType: 'text',
      type: 'POST',
      success: function (data) {
        $ ('.form-submit').text('Отправлено');
        $ ('#a-name').val('');
        $ ('#a-phone').val('');
        showThank();
        isSended = true;
      },
      error: function (err) {
        debuger = err;
        $ ('.form-submit').text('Ошибка');
        setTimeout(function () { $ ('.form-submit').text('Заказать аудит'); }, 3000);
      },
      beforeSend: function () {
         $ ('.form-submit').text('Отправка...');
      }
    });
  }

  var nameErrno;
  var phoneErrno;

  function valideName() {
    var reN = /(.*)/.test(formName) && formName != '';
    if (reN) {
      return true;
    } else {
      nameErrno = "Неверный формат имени";
    }
  }


  function validePhone() {
    var reP = /^\d+$/.test(formPhone) || !formPhone.indexOf('+');
    if (reP) {
      return true;
    } else {
      phoneErrno = "Неверный формат телефона";
    }
  }

  if (!valideName()) {
    $ ('#span-errno span').text(nameErrno);
    $ ('#span-errno span').fadeIn(300);
    setTimeout(function () { $ ('#span-errno span').fadeOut(400); }, 3000);
    return false;
  } else if (!validePhone()) {
    $ ('#span-errno span').text(phoneErrno);
    $ ('#span-errno span').fadeIn(400);
    setTimeout(function () { $ ('#span-errno span').fadeOut(400); }, 3000);
  } else {
    $ ('#span-errno span').fadeOut(400);
    if (!isSended) {
    	send ();
    } else {
        $ ('#span-errno span').text("Уже отправлено... Ожидайте");
        $ ('#span-errno span').fadeIn(300);
        setTimeout(function () { $ ('#span-errno span').fadeOut(400); }, 3000);
      }
  }







});















});
