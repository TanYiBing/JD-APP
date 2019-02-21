import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public flag = false;  /*有没有关键词、关键词开关*/

  public keywords = '';  /*关键词*/

  public recList = [];

  public historyList = []; /*历史记录的数据*/

  constructor(private storage: StorageService, private alertCtrl: AlertController) {
    for (let i = 0; i < 10; i++) {
      this.recList.push({
        pic: `assets/imgs/0${i}.jpg`,
        title: `第${i}条`
      });
    }
  }

  ngOnInit() {
  }


  getHistory() {
    const history = this.storage.get('historyData');
    if (history) {  /*如果历史记录存在 把历史记录给数据*/
      this.historyList = history;
    }
  }
  // 删除历史记录

  removeHistory(keywords) {
    // 提示
    const confirm = this.alertCtrl.create({
      title: '您确定要删除吗?',
      message: '您确定要删除这条历史记录吗，确定点击是，否则点击否。',
      buttons: [
        {
          text: '否',
          handler: () => {

          }
        },
        {
          text: '是',
          handler: () => {

            const index = this.historyList.indexOf(keywords);
            // console.log(index);

            this.historyList.splice(index, 1);
            // 写入到localstorage
            this.storage.set('historyData', this.historyList);
          }
        }
      ]
    });
    confirm.present();
  }

}
