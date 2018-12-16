import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable()
export class OnlinestoreProvider {
  private storageRef;
  private imagesRef;

  constructor(private afStorage: AngularFireStorage) {
    this.storageRef = firebase.storage().ref;
    // this.imagesRef = this.storageRef.child('images');

    //console.log(this.imagesRef);
  }
}
