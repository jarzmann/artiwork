import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtisanListPage } from './artisan-list';

@NgModule({
  declarations: [
    ArtisanListPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtisanListPage),
  ],
})
export class ArtisanListPageModule {}
