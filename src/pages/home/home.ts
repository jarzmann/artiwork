import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public artiTile: string;

  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public dataProvider: DataProvider
  ) {}

  goToProfile(): void {
    this.navCtrl.push('ProfilePage');
  }

  goToArtisan(item) {
    console.log(item);
    this.dataProvider.getArtisanList();
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
}
