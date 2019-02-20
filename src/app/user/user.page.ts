import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-user',
  templateUrl: 'user.page.html',
  styleUrls: ['user.page.scss']
})

export class UserPage {
  constructor(private navCtrl: NavController) {}

  handleLoginClick() {
    this.navCtrl.navigateForward('/login');
  }
}
