import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {
  nameLower = 'yael santana';
  nameUpper = 'YAEL SANTANA';
  nameTitle = 'YaEl SanTANa';
  customDate: Date = new Date();
}
