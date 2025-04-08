export class BurgerMenuModel {
   constructor() {
     this.isOpen = false;
   }
 
   toggle() {
     this.isOpen = !this.isOpen;
     return this.isOpen;
   }
 }