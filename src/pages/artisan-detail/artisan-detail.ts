import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-artisan-detail',
  templateUrl: 'artisan-detail.html',
})
export class ArtisanDetailPage {
  public artisan: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.artisan = this.navParams.get('artisan');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtisanDetailPage ',this.artisan);
  }

}
