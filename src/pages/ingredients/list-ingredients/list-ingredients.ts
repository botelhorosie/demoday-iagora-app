import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'list-ingredients.html'
})
export class ListIngredientsPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController) {

  }

  items = [
    { name: 'Batata', selected: false},
    { name: 'Arroz', selected: false},
    { name: 'Pão', selected: false},
    { name: 'Ovos', selected: false},
    { name: 'Achocolatado', selected: false},
    { name: 'Chocolate', selected: false},
    { name: 'Manteiga', selected: false},
    { name: 'Feijão', selected: false},
    { name: 'Palmito', selected: false},
    { name: 'Mussarela', selected: false},
    { name: 'Azeite', selected: false},
    { name: 'Bacon', selected: false},
    { name: 'Frango', selected: false},
    { name: 'Requeijão', selected: false},
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  done() {
    let selectedItems=[];
    for (let item of this.items){       
     if (item.selected==true){  
      selectedItems.push(item)
      }
    } 
    this.viewCtrl.dismiss({selectedItems:selectedItems });
  }


}
