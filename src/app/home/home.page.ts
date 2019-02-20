import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public recList = [];
  public bestListWidth = '900px'; /*精品推荐数据长度*/
  slideOpts = {
    effect: 'flip',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  constructor(private navCtrl: NavController) {
    for (let i = 0; i < 10; i++) {
      this.recList.push({
        pic: `assets/imgs/0${i}.jpg`,
        title: `第${i}条`
      });
    }
  }

  goSearch() {
    this.navCtrl.navigateForward('search');
  }


}
