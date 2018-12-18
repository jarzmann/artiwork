import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtisanformatterProvider } from '../../providers/artisanformatter/artisanformatter';

@IonicPage()
@Component({
  selector: 'page-artisan-detail',
  templateUrl: 'artisan-detail.html'
})
export class ArtisanDetailPage {
  public artisan: any;
  public category: string;
  public headerImg: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public helper: ArtisanformatterProvider
  ) {
    this.artisan = this.navParams.get('artisan');
    this.category = this.navParams.get('category');
    this.headerImg = this.helper.getHeaderImage(this.category);
    // this.artisan.category = (this.artisan.category) ? this.artisan.category : "Default";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtisanDetailPage ', this.artisan);
  }
}
