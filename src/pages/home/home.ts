import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public dataProvider: DataProvider
  ) {}

  goToProfile(): void {
    this.navCtrl.push('ProfilePage');
  }

  goToArtisanList(category): void {
    console.log(category);
    this.navCtrl.push('ArtisanListPage', { category: category });
  }

  goToArtisan(item) {
    console.log(item);
    this.dataProvider.getArtisanList(item);
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
}
