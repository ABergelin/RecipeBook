import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [
    FormsModule, //Importing as we use template driven forms in this module
    //BrowserModule, //Importing ngFor etc
    //Small module so adding route here
    RouterModule.forChild([
      { path: '', component: ShoppingListComponent },
    ]),
    SharedModule,
  ],
})
export class ShoppingListModule {}
