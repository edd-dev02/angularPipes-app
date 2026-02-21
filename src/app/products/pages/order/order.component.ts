import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | "" = "";

  public heroes: Hero[] = [
    {
      name: "Super-man",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black
    },
    {
      name: "Green arrow",
      canFly: false,
      color: Color.green
    },
    {
      name: "Shazam",
      canFly: true,
      color: Color.red
    },
  ]

  toggleUpperCase(): void {

    this.isUpperCase = !this.isUpperCase; // Siempre se invertirá el valor

  }

  changeOrder(value : keyof Hero) {
    this.orderBy = value;
  }

}
