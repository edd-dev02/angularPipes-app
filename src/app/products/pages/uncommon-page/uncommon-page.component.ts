import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = "Eduardo";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() : void {
    this.name = 'Dayana';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ["María", "Pedro", "Fernando", "Hernan", "Eduardo", "Melissa", "Natalia"];
  public clientsMap = {
    '=0': "No tenemos ningún cliente esperando",
    '=1': "Tenemos 1 cliente esperando",
    'other': "Tenemos # clientes esperando"
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // Key value pipe
  public person = {
    name: 'Eduardo',
    age: 36,
    address: 'Jalisco, México'
  }

  // Async pipe: Trabaja mejor con Observables que con promesas
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa.");
    }, 3500);
  })

}
