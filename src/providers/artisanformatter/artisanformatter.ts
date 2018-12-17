import { Injectable } from '@angular/core';

@Injectable()
export class ArtisanformatterProvider {

  private min: number = 1;
  private max: number = 5;

  constructor() {
    console.log('Hello ArtisanformatterProvider Provider');
  }

  randomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

}
