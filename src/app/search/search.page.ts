import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public flag = false;  /*有没有关键词、关键词开关*/

  public keywords = '';  /*关键词*/

  public recList = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.recList.push({
        pic: `assets/imgs/0${i}.jpg`,
        title: `第${i}条`
      });
    }
  }

  ngOnInit() {
  }

  getSearchList()

}
