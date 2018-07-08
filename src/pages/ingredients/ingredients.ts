import {
  Component
} from '@angular/core';
import {
  NavController, ModalController
} from 'ionic-angular';

import { ListIngredientsPage } from './list-ingredients/list-ingredients';

@Component({
  selector: 'page-ingredients',
  templateUrl: 'ingredients.html'
})
export class IngredientsPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
  items:any = [];

  setItems(items) {
    this.items = items;
  }

  openModal() {
    let modal = this.modalCtrl.create(ListIngredientsPage);
    modal.onDidDismiss((data) => {
      this.setItems(data.selectedItems);
    });
    modal.present();
  }
}
