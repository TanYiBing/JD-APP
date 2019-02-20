import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registersign',
  templateUrl: './registersign.page.html',
  styleUrls: ['./registersign.page.scss'],
})
export class RegistersignPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  handleRegisterpasswordClicked() {
    this.navCtrl.navigateForward('registerpassword');
  }

}
