import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const apiUrl = 'https://randomuser.me/api/';

@Injectable()
export class DataProvider {
  artisans: Observable<any>;
  category: string = 'foobar';

  constructor(private http: HttpClient) {}

  getArtisanList(artisanCategory) {
    this.category = artisanCategory ? artisanCategory : this.category;
    this.artisans = this.http.get(apiUrl + '?results=20&seed=' + this.category);
    this.artisans.subscribe(data => {
      console.log('my data: ', data);
    });
    return this.artisans;
  }

  getArtisanDetail(artisanId: number) {
    //this.category = artisanCategory ? artisanCategory : this.category;
    this.artisans = this.http.get(apiUrl + '?id=' + artisanId);
    this.artisans.subscribe(data => {
      console.log('my data: ', data);
    });
    return this.artisans;
  }
}
