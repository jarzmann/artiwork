import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtisanDetailPage } from './artisan-detail';

@NgModule({
  declarations: [
    ArtisanDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtisanDetailPage),
  ],
})
export class ArtisanDetailPageModule {}
