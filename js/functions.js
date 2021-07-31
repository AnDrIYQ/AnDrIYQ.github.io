// Min Template Functions

function NoSelectable(Class) {
  $ ('.' + Class).on ('mousedown', function () {
    return false;
  });
  $ ('.' + Class).css('user-select', 'none');
}

function GridHover () {
  $ ('.photos-grid__col:eq(0)').hover(
    function () {
      var ch = $ ('.photos-grid__col:eq(0)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.2)');
    },
    function () {
      var ch = $ ('.photos-grid__col:eq(0)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.0)');
    }
  );

  $ ('.photos-grid__col:eq(1)').hover(
    function () {
      var ch = $ ('.photos-grid__col:eq(1)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.2)');
    },
    function () {
      var ch = $ ('.photos-grid__col:eq(1)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.0)');
    }
  );

  $ ('.photos-grid__col:eq(2)').hover(
    function () {
      var ch = $ ('.photos-grid__col:eq(2)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.2)');
    },
    function () {
      var ch = $ ('.photos-grid__col:eq(2)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.0)');
    }
  );

  $ ('.photos-grid__col:eq(3)').hover(
    function () {
      var ch = $ ('.photos-grid__col:eq(3)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.2)');
    },
    function () {
      var ch = $ ('.photos-grid__col:eq(3)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.0)');
    }
  );

  $ ('.photos-grid__col:eq(4)').hover(
    function () {
      var ch = $ ('.photos-grid__col:eq(4)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.2)');
    },
    function () {
      var ch = $ ('.photos-grid__col:eq(4)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.0)');
    }
  );

  $ ('.photos-grid__col:eq(5)').hover(
    function () {
      var ch = $ ('.photos-grid__col:eq(5)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.2)');
    },
    function () {
      var ch = $ ('.photos-grid__col:eq(5)').children();
      ch.children().first().css('transition', 'all 2s');
      ch.children().first().css('transform', 'scale(1.0)');
    }
  );
}

// Logic Function

function navToggle() {
  if ($ ('#nav-toggler').css('display') == 'none') {

  } else {
    $ ('.second').animate({'margin-bottom': '0', 'margin-top': '0'}, {duration: 200, queue: false});
    $ ('.thr').animate({'margin-bottom': '0.5vw'}, {duration: 200, queue: false});
    $ ('.frst').animate({'margin-top': '0.5vw'}, {duration: 200, queue: false});
    $ ('.second').animate({'height': '0vw'}, {duration: 200, queue: true});
    $ ('.second').animate({'opacity': '0'}, {duration: 200, queue: true});
    $ ('.frst').css('position', 'relative');
    $ ('.frst').animate({'top': '0.3vw'}, {duration: 50, queue: false});
    $ ('.thr').animate({'top': '0.5vw'}, {duration: 50, queue: false});

    $ ('.frst').css({'transform': 'rotate(45deg)'}, {duration: 50, queue: false});
    $ ('.thr').css({'transform': 'rotate(-45deg)'}, {duration: 50, queue: false});


  }
}

function FocusBack() {
  var layer = document.getElementById("layer-map")[0];
  var map = document.getElementById("map-canvas");
  
}


function setSelect () {
	$ ('.nav-panel__drop').click(function () {
		$ ('.nav-panel__lang-changer__on-hover').css('display','flex');
		$ ('#drop-lang').animate({opacity: '0'}, 700);
		$ ('.nav-panel__lang-changer__on-hover').animate({opacity: '1'}, 700);
	});
	$ ('.nav-panel__drop').hover(

	 function () {
		 $ ('.nav-panel__lang-changer__on-hover').css('display','flex');
		 $ ('#drop-lang').animate({opacity: '0'}, 700);
		 $ ('.nav-panel__lang-changer__on-hover').animate({opacity: '1'}, 700);
	 },
	 function () {
		 $ ('#drop-lang').animate({opacity: '1'}, 700);
		 $ ('.nav-panel__lang-changer__on-hover').animate({opacity: '0'}, 700);
		 setTimeout(function () {
		 $ ('.nav-panel__lang-changer__on-hover').css('display','none');
	 }, 850);
	 });

}

function setFloatForm () {
	$ ('.nav-panel__btn').on('click', function () {
		$ ('.float-form').animate({left: '0'}, {queue: false, delay: 1500});
		$ ('.float-form').animate({opacity: '1'}, {queue: false, delay: 1500});
	});
	$ ('.float-form-close').on('click', function () {
		$ ('.float-form').animate({left: '-100%'}, {queue: false, delay: 1500});
		$ ('.float-form').animate({opacity: '0'}, {queue: false, delay: 1500});
	});
}


function setSocialTransform() {
	$ ('.tg').hover(
		function () {
			$ ('.tg img').attr('src', 'img/header-section/h-tg.svg');
		},
		function () {
			$ ('.tg img').attr('src', 'img/header-section/tg.svg');
		}
);

	$ ('.ws').hover(
		function () {
				$ ('.ws img').attr('src', 'img/header-section/h-ws.svg');
		},
		function () {
				$ ('.ws img').attr('src', 'img/header-section/ws.svg');
		}
);

	$ ('.vb').hover(
		function () {
				$ ('.vb img').attr('src', 'img/header-section/h-vb.svg');
		},
		function () {
				$ ('.vb img').attr('src', 'img/header-section/vb.svg');
		}
);
}

function allLinksNoAction () {
	$ ('.arrow').on('click', function (e) {
		e.preventDefault();
	});
}


// Sldier
	function SliderInit()
	{

		var lastClone = '<div id="lastClone" class="slide-item">' + $ (".slide-item").last().html() + '</div>';
		var firstClone = '<div id="firstClone" class="slide-item">' + $ (".slide-item").first().html() + '</div>';

		$ ('.structure-slider-row').append(firstClone);
		$ ('.structure-slider-row').prepend(lastClone);

		$ ('#firstClone').css('display', 'none');
		$ ('#lastClone').css('display', 'none');

	}

	function Next() {
		SlideIndex += 1;
		if (SlideIndex > document.querySelectorAll(".slide-item").length - 2)
		{
			SlideIndex = 1;
			SwipeTo(SlideIndex);
		} else {
			SwipeTo(SlideIndex);
		}
	}
	function Prev() {
		SlideIndex -= 1;
		if (SlideIndex < 1)
		{
			SlideIndex = document.querySelectorAll(".slide-item").length - 2;
			SwipeTo(SlideIndex);
		} else {
			SwipeTo(SlideIndex);
		}
	}

	function TeleportTo(i) {
		var counter = i;
		var SlidesSize = document.querySelectorAll(".slide-item").length - 2;
		var SlideContainer = document.querySelector(".structure-slider-row");
		var Slides = document.querySelectorAll(".slide-item");
		var SingleSlide = document.querySelectorAll(".slide-item")[1];
		var SlideWidth = SingleSlide.clientWidth;
		var SlideWidthVW = SlideWidth * 100 / window.innerWidth;

		$ ('.span-down').text(counter + " этап из 5");

		SlideContainer.style.transition = "none";
		SlideContainer.style.transform = "translateX(" + (-(counter - 1) * SlideWidthVW) + "vw)";
	}

	function SwipeTo(i) {
		var counter = i;
		var SlidesSize = document.querySelectorAll(".slide-item").length - 2;
		var SlideContainer = document.querySelector(".structure-slider-row");
		var Slides = document.querySelectorAll(".slide-item");
		var SingleSlide = document.querySelectorAll(".slide-item")[1];
		var SlideWidth = SingleSlide.clientWidth;
		var SlideWidthVW = SlideWidth * 100 / window.innerWidth;

		$ ('.span-down').text(counter + " этап из 5");

				SlideContainer.style.transition = "1s all";
				SlideContainer.style.transform = "translateX(" + (-(counter - 1) * SlideWidthVW) + "vw)";
	}

function InitializeArrows ()
 {
		$ ('.arrow').click(function () {
				$ ('.circle-slide-item').removeClass("circle-slide-item__active");
				$ ('.circle-slide-item:eq(' + (SlideIndex - 1) + ')').addClass("circle-slide-item__active");
		});
 }

// Sldier
