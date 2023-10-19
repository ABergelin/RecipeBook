import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { RecipeService } from './recipeBook/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

//The purpose of this module is to hold any services and interceptors. This can then be
// imported in the app.module. This keeps app.module leaner.
// Services should just be used as "provided for root" though.

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
