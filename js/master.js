// On start
NoSelectable('no-move');
GridHover ();
realizeMap ();
allLinksNoAction ();
setSelect ();
setFloatForm ();
setSocialTransform();

$ ('img').on('mousedown', function () {
	return false;
});

(function () {

  var d = document;
  //nav-toggler
  var MenuToggler = function () {
    this.state = false;
    this.navClicker = d.querySelector("#nav-toggler");
    this.burgerItems = d.querySelectorAll(".burger__item");

    this.first = this.burgerItems[0];
    this.second = this.burgerItems[1];
    this.third = this.burgerItems[2];

    this.nav = d.querySelector('.navbar');

    this.animate();
  }


  MenuToggler.prototype.animate = function () {
    var state = this.state;
    var first = this.first;
    var second = this.second;
    var third = this.third;
    var nav = this.nav;

    this.navClicker.addEventListener("click", function () {

      if (state == false)
      {
        nav.style.top = 0 + 'vw';
        first.style.top = 0.8 + "vw";
        second.style.opacity = 0;
        third.style.top = -0.8 + "vw";
        setTimeout(function () {
          first.style.transform = "rotate(-47deg)";
          first.style.backgroundColor = "#f3c939";
          third.style.transform = "rotate(47deg)";
        }, 600);
        state = true;
      }
      else
      {
        nav.style.top = -2.5 + 'vw';
        first.style.transform = "rotate(0deg)";
        first.style.backgroundColor = "white";
        third.style.transform = "rotate(0deg)";
        setTimeout(function () {
          first.style.top = 0 + "vw";
          second.style.opacity = 1;
          third.style.top = 0 + "vw";
        }, 600);
        state = false;
       }

     });
  }

  new MenuToggler();
})();

var Printer = new Typed('#Ticker', {
  strings: [
		'Landig<br> Pages'
	],
  smartBackspace: true,
	backSpeed: 50,
	typeSpeed: 100,
	loop: true,
	showCursor: false,
	autoInsertCss: true,
	bindInputFocusEvents: true,
});




var SlideIndex = 1;

SliderInit();
$ ('.span-down').text(SlideIndex + " этап из 5");

$ ('#prev').click(function () {
	Prev();
});

$ ('#next').click(function () {
	Next();
});
InitializeArrows ();
//DOM COntent Loaded


// On Ready


// On Resize

// On Update Scrolll
