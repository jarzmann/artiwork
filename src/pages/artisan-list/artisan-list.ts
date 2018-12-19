import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from '../../providers/data/data';
import { ArtisanformatterProvider } from '../../providers/artisanformatter/artisanformatter';
import { Storage } from '@ionic/storage';

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
    public formatter: ArtisanformatterProvider,
    public storage: Storage
  ) {
    this.category = this.navParams.get('category') ? this.navParams.get('category') : "Default";
    this.artisans = this.dataProvider.getArtisanList(this.category);
    this.headerImg = this.formatter.getHeaderImage(this.category);
    console.log ('header img src: ', this.headerImg );

  }

  goToArtisanDetail(artisan) {
    artisan.name.fullname = artisan.name.first + " " + artisan.name.last;
    artisan.category = this.category;
    this.storage.set('category', this.category);
    this.storage.set('artisan', artisan);
    this.navCtrl.push('ArtisanDetailPage', { artisan: artisan, category : this.category });
    //this.dataProvider.getArtisanList(artisan);
  }

  RandomDigit() {
    return this.formatter.randomInt(1,5);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtisanListPage: ', this.artisans);
  }
}
