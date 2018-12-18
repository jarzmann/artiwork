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
  public headerImg: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider,
    public formatter: ArtisanformatterProvider
  ) {
    this.category = this.navParams.get('category') ? this.navParams.get('category') : "Default";
    this.artisans = this.dataProvider.getArtisanList(this.category);
    this.headerImg = this.formatter.getHeaderImage(this.category);
    console.log ('header img src: ', this.headerImg );

  }

  goToArtisan(item) {
    item.name.fullname = item.name.first + " " + item.name.last;
    item.category = this.category;
    this.navCtrl.push('ArtisanDetailPage', { artisan: item, category : this.category });
    //this.dataProvider.getArtisanList(item);
  }

  RandomDigit() {
    return this.formatter.randomInt(1,5);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtisanListPage: ', this.artisans);
  }
}
