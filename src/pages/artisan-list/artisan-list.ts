import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-artisan-list',
  templateUrl: 'artisan-list.html'
})
export class ArtisanListPage {
  artisans: any;
  category: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) {
    this.category = this.navParams.get('category');
    this.artisans = this.dataProvider.getArtisanList(this.category);
  }

  goToArtisan(item) {
    item.name.fullname = item.name.first + " " + item.name.last;
    item.category = this.category;
    this.navCtrl.push('ArtisanDetailPage', { artisan: item });
    //this.dataProvider.getArtisanList(item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtisanListPage: ', this.artisans);
  }
}
