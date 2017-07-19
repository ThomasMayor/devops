import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { INotifItem } from "./notif-model";
import { Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Injectable()
export class NotificationService  {

  constructor(
    public platform:Platform,
    public localNotifications: LocalNotifications,
    public alertCtrl: AlertController
  ){
  }
  schedule(notif:INotifItem):void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //console.log('platform-> ',this.platform.is('core'))
      console.log(this.platform)
      if (this.platform.is('core')) {
        //alert(notif.text)
        let alert = this.alertCtrl.create({
            title: notif.title,
            subTitle: notif.text,
            buttons: ['Dismiss']
        });
        alert.present();
      }
      else {
        this.localNotifications.schedule(notif)
      }
    });
  }
}