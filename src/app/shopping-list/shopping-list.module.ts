import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [FormsModule, BrowserModule],
})
export class ShoppingListModule {}
