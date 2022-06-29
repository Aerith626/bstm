// Texto animado
var textWrapper = document.querySelector('.hero__titulo .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letra'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.hero__titulo .letra',
    translateY: ["1.2em", 0],
    translateZ: 0,
    duration: 1000,
    delay: (el, i) => 60 * i
  });

//Slider

window.addEventListener('load', function () {
  new Glider(document.querySelector('.slider__lista'), {
    slidesToShow: 1,
    draggable: true,
    arrows: {
      prev: '.herramientas__slider--anterior',
      next: '.herramientas__slider--siguiente'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 3,
          itemWidth: 150,
          duration: 0.2
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          duration: 0.2
        }
      }
    ]
  });
});


//Navbar responsive

// probar responsive eliggiendo con get element by class
let navSlide = () => {
  let dropDown = document.querySelector('.hero__dropdown');
  let nav = document.querySelector('.hero__nav--items');
  let navLinks = document.querySelectorAll('.hero__nav--items a');
  // Toggle Nav
  dropDown.addEventListener('click', () => {
      nav.classList.toggle('hero__nav--active');
      // Links Fade
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation= '';
          } else {
              link.style.animation = `navLinksFade 0.2s ease-out forwards ${index/10+.3}s`;
          }
      });
      dropDown.classList.toggle('hero__dropdown--opacity');
  });
  
}

navSlide();


let navBar = document.querySelector('header')
let seccion1 = document.querySelector('#hero');

let opciones1 = {
  rootMargin: "-750px 0px 0px 0px"
};

let observador1 = new IntersectionObserver(function(
  entradas, 
  observador1
  ) {
    entradas.forEach(entrada => {
      if(!entrada.isIntersecting) {
        navBar.classList.add("nav-scrolled");
      } else {
        navBar.classList.remove("nav-scrolled");
      }
    })
},
 opciones1);

observador1.observe(seccion1);




// Tabs


function actTabs () {
  document.querySelectorAll('.tabs__btn').forEach(btn => {
      btn.addEventListener('click', ()=> {
          let sideBar = btn.parentElement;
          let tabsContainer = sideBar.parentElement;
          let tabsNum = btn.dataset.btnTab;
          let tabToActivate = tabsContainer.querySelector(`.tabs__container[data-tab="${tabsNum}"]`);
          sideBar.querySelectorAll('.tabs__btn').forEach(btn => {
              btn.classList.remove('tabs__btn--active');
          });
          tabsContainer.querySelectorAll('.tabs__container').forEach(tab => {
              tab.classList.remove('tabs__container--active');
          });

          btn.classList.add('tabs__btn--active');
          tabToActivate.classList.add("tabs__container--active");
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  actTabs ();

  document.querySelectorAll('.tabs').forEach(tabsContainer => {
      tabsContainer.querySelector('.tabs__navegacion .tabs__btn').click();
  });

});

// Popup
