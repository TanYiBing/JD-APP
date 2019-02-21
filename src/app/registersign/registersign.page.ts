import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { HttpServicesService } from '../http-services.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-registersign',
  templateUrl: './registersign.page.html',
  styleUrls: ['./registersign.page.scss'],
})
export class RegistersignPage implements OnInit {

  public code = '';  /*验证码*/
  public isShowSend = false;   /*是否显示发送验证码的按钮*/
  public num = 10;   /*倒计时的数量*/
  public tel = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpServicesService,
    public storage: StorageService) {

    this.tel = this.storage.get('reg_tel');
  }

  ionViewDidLoad() {
    this.doTimer();  /*倒计时*/
  }
  goRegisterpasswordPage() {

    // 验证验证码是否成功
    const api = 'api/validateCode';
    this.httpService.doPost(api, { 'tel': this.tel, 'code': this.code }, (result) => {
      console.log(result);  /*发送到手机的验证码返回方便我们验证*/
      if (result.success) {
        // 保存验证码
        this.storage.set('reg_code', this.code);

        // 跳转到下一个页面
        this.navCtrl.navigateForward('registerpassword');
      } else {
        alert('验证码输入错误');
      }
    });

  }
  // 倒计时的方法

  doTimer() {

    const timer = setInterval(() => {
      --this.num;

      if (this.num === 0) {
        clearInterval(timer);
        this.isShowSend = true;
      }

    }, 1000);

  }
  // 发送验证码
  sendCode() {

    // 获取电话号码


    // console.log('重新发送验证码')

    const api = 'api/sendCode';
    this.httpService.doPost(api, { 'tel': this.tel }, (result) => {
      console.log(result);  /*发送到手机的验证码返回方便我们验证*/
      if (result.success) {

        this.num = 10;  /*设置倒计时*/
        this.doTimer();  /*倒计时*/
        this.isShowSend = false;  /*显示倒计时按钮*/
      } else {
        alert('发送验证码失败');
      }
    });

  }

}
