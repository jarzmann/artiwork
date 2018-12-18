import { Injectable } from '@angular/core';

@Injectable()
export class ArtisanformatterProvider {

  private min: number = 1;
  private max: number = 5;
  private imgUrl: string;

  constructor() {
    console.log('Hello ArtisanformatterProvider Provider');
  }

  randomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getHeaderImage(category: string)
  {
    switch (category)
    {
      case "carpenter": {
        this.imgUrl = "https://firebasestorage.googleapis.com/v0/b/todo-606fc.appspot.com/o/images%2Fcarpenter.jpg?alt=media&token=06d6a434-22aa-415e-bd2a-c2e659f25a3b";
        break;
      }

      case "electrician": {
        this.imgUrl = "https://firebasestorage.googleapis.com/v0/b/todo-606fc.appspot.com/o/images%2Felectrician.jpg?alt=media&token=da95f588-b834-471e-9b5b-8455ecaf600d";
        break;
      }

      case "plumber": {
        this.imgUrl = "https://firebasestorage.googleapis.com/v0/b/todo-606fc.appspot.com/o/images%2Fplumber.jpg?alt=media&token=fd53327f-07ce-4d14-a69a-60ea2ab114da";
        break;
      }

      case "bricklayer": {
        this.imgUrl = "https://firebasestorage.googleapis.com/v0/b/todo-606fc.appspot.com/o/images%2Fbricklayer.jpg?alt=media&token=35d8a0f5-222a-497e-8756-68c5605d2010";
        break;
      }

      default: {
        this.imgUrl = "https://firebasestorage.googleapis.com/v0/b/todo-606fc.appspot.com/o/images%2Fartisan3.jpg?alt=media&token=4cc4c388-b273-49d2-a19f-2ff6121393df";
        break;
      }
    }
    return this.imgUrl;
  }

}
