import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PersonalComponent } from './pages/personal-page/personal-page.component';


import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/canfly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorStringPipe } from './pipes/color-string.pipe';



@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    PersonalComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
    ColorStringPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class ProductsModule { }
