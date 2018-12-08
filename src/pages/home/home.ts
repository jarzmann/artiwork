import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authProvider: AuthProvider,) {

  }

  logout(): void {
    this.authProvider.logoutUser;
    this.navCtrl.setRoot('LoginPage');
  }

}
