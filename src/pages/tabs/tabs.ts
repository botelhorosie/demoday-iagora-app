import { Component } from '@angular/core';

import { RecepiesPage } from '../recepies/recepies';
import { IngredientsPage } from '../ingredients/ingredients';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecepiesPage;
  tab3Root = IngredientsPage;

  constructor() {

  }
}
