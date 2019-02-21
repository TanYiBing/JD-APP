import { Component, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpServicesService } from '../http-services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public recList = [];
  public focusList = [];  /*数组 轮播图*/
  public bestListWidth = '900px'; /*精品推荐数据长度*/
  public slideOpts = {
    effect: 'flip',
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  constructor(
    private navCtrl: NavController,
    private httpServices: HttpServicesService,
    @Inject('BASE_CONFIG') private config: { apiUrl: string }
  ) {

    this.getFocus();
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

  getFocus() {
    this.httpServices.requestData('api/focus', (data) => {
      // console.log(data);
      this.focusList = data.result;

    });
  }


}
