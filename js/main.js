import { BurgerMenuModel } from './model.js';
import { BurgerMenuView } from './view.js';
import { BurgerMenuController } from './controller.js';

const model = new BurgerMenuModel();
const view = new BurgerMenuView();
new BurgerMenuController(model, view);