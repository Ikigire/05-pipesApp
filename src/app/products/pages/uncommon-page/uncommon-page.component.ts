import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  name: string = "Alejandro";
  gender: 'male'|'female' = 'male';

  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Yael';
    this.gender = 'female';
  }

  // i18nPlural && slice 
  clients: string[] = ['Maria', 'Pedro', 'Juan', 'Ariel', 'Roberto', 'Roberta'];

  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando'
  }
  atenderCliente(): void {
    if (this.clients.length == 0) {
      this.clients = ['Maria', 'Pedro', 'Juan', 'Ariel', 'Roberto', 'Roberta', ''];
    }
    this.clients.shift();
  }

  // Json && KeyValue Pipe
  person = {
    name: 'Yael',
    age: 27,
    address: 'Sayula, Jalisco, Mex'
  }

  // async pipe
  myObservableTimer = interval(2000)

  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 2000);
  })
}
