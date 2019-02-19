import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html',
  styleUrls: ['category.page.scss']
})
export class CategoryPage {

  public recList = [];
  public cateList = [];

  constructor() {
    // 右侧分类数据模拟
    for (let i = 0; i < 10; i++) {
      this.recList.push({
        pic: `assets/imgs/0${i}.jpg`,
        title: `第${i}条`
      });
    }

    // 左侧分类数据模拟
    for (let i = 0; i < 30; i++) {
      this.cateList.push(`分类${i}`);
    }
  }
}
