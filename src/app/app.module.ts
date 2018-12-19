import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
import { Camera } from '@ionic-native/camera';
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';
import { ArtisanformatterProvider } from '../providers/artisanformatter/artisanformatter';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp), IonicStorageModule.forRoot()],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    EventProvider,
    ProfileProvider,
    Camera,
    DataProvider,
    ArtisanformatterProvider
  ]
})
export class AppModule {}
