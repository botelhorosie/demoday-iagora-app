import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  IngredientsPage
} from './../ingredients/ingredients';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 


  constructor(public navCtrl: NavController) {

    console.log("oi")


  }
  ngOnInit() {
    this.navCtrl.push(IngredientsPage);
  }

}
