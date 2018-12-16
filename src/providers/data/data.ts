import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataProvider {
  artisans: Observable<any>;

  constructor(private http: HttpClient) {
  }

  getArtisanList() {
    this.artisans = this.http.get('https://randomuser.me/api/?results=20&?seed=foobar');
    this.artisans.subscribe(data => {
      console.log('my data: ', data);
    });
  }
}
