import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { ArtisanformatterProvider } from '../../providers/artisanformatter/artisanformatter';

@IonicPage()
@Component({
  selector: 'page-artisan-list',
  templateUrl: 'artisan-list.html'
})
export class ArtisanListPage {
  artisans: any;
  category: string = "default";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider,
    public formatter: ArtisanformatterProvider
  ) {
    this.category = this.navParams.get('category') ? this.navParams.get('category') : "Default";
    this.artisans = this.dataProvider.getArtisanList(this.category);
  }

  goToArtisan(item) {
    item.name.fullname = item.name.first + " " + item.name.last;
    item.category = this.category;
    this.navCtrl.push('ArtisanDetailPage', { artisan: item });
    //this.dataProvider.getArtisanList(item);
  }

  RandomDigit() {
    return this.formatter.randomInt(1,5);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtisanListPage: ', this.artisans);
  }
}
