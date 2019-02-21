import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpServicesService } from '../http-services.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public tel = '';

  constructor(private navCtrl: NavController, private httpService: HttpServicesService, private storage: StorageService) { }

  ngOnInit() {
  }

  handleRegistersignClieked() {
    console.log(this.tel);
    // this.navCtrl.push(RegistersignPage);

    const _that = this;

    // 电话号码是否合法的验证
    if (/^\d{11}$/.test(this.tel)) {

      // 注意 服务器要允许跨域
      const api = 'api/sendCode';
      this.httpService.doPost(api, { 'tel': this.tel }, function (result) {
        console.log(result);  /*发送到手机的验证码返回方便我们验证*/
        if (result.success) {

          _that.storage.set('reg_tel', _that.tel);  /*保存电话号码*/

          _that.navCtrl.navigateForward('registersign');  /*跳转到下个页面 验证验证码*/
        } else {
          alert('发送验证码失败 ' + result.message);
        }
      });
    } else {
      alert('电话号码错误');
    }

  }

}
