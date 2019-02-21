import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../http-services.service';
import { StorageService } from '../storage.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registerpassword',
  templateUrl: './registerpassword.page.html',
  styleUrls: ['./registerpassword.page.scss'],
})
export class RegisterpasswordPage implements OnInit {

  public tel = '';

  public code = '';

  public password = '';

  public rpassword = '';

  constructor(
    private httpService: HttpServicesService,
    private storage: StorageService,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  // 执行注册

  doRegister() {
    if (this.password !== this.rpassword) {

      alert('确认密码和密码不一样');
    } else if (this.password.length < 6) {
      alert('密码长度不能小于6位');

    } else {

      // 提交数据

      const api = 'api/register';
      this.httpService.doPost(api, { 'tel': this.tel, 'code': this.code, 'password': this.password }, (result) => {

        console.log(result);

        if (result.success) {
          // 保存用户信息
          this.storage.set('userinfo', result.userinfo[0]);

          // 返回到用户中心 注册成功

          // http://ionicframework.com/docs/api/navigation/NavController/#popToRoot

          this.navCtrl.navigateRoot('');   /*回到根页面*/



        } else {

          alert('注册失败');
        }


      });


    }

  }

}
