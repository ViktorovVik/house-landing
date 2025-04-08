export class BurgerMenuView {
   constructor() {
     this.button = document.querySelector('[data-js-header-burger-button]');
     this.nav = document.querySelector('[data-js-nav]');
   }
 
   toggleMenu(isOpen) {
     if (isOpen) {
       this.nav.classList.add('active');
       this.button.classList.add('active');
     } else {
       this.nav.classList.remove('active');
       this.button.classList.remove('active');
     }
   }
 
   bindToggleMenu(handler) {
     this.button.addEventListener('click', handler);
   }
 }