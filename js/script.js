//Slider



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
  rootMargin: "-650px 0px 0px 0px"
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

// Validacion formulario y emailjs

  var formBtn = document.getElementById('form__btn')
  var form = document.getElementById('formulario');
  orm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    formBtn.value = 'Enviando...';
    const serviceID = 'service_0dxj06y';
    const templateID = 'template_mb5oj6k';
    
    emailjs.sendForm(serviceID, templateID, this)
    .then(()=> {
      formBtn.value = 'Enviar Mensaje';
      alert('Mensaje enviado correctamente');
    }), (err) => {
      formBtn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    }
  });
