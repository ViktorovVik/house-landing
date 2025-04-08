import { BurgerMenuModel } from './model.js';
import { BurgerMenuView } from './view.js';

export class BurgerMenuController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindToggleMenu(this.handleToggle.bind(this));
  }

  handleToggle() {
    const isOpen = this.model.toggle();
    this.view.toggleMenu(isOpen);
  }
}