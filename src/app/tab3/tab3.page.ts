import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  contName = "";
  contNumber = ""
  contacts: any = [];

  constructor(public contactService: ContactServiceService, public alertController: AlertController) { }


  saveC() {
    let contacts = {
      name: this.contName,
      number: this.contNumber
    }
      this.contacts.push(contacts);
      this.clearField()
      console.log(this.contacts);
    
  }

  clearField() {
    this.contName = "";
    this.contNumber = "";
  }
    async trash(cont){
      const alert = await this.alertController.create({
        header: 'Confirm Deletion?',
        message: 'Delete this contact?',
        buttons: [
          {
            text : 'Cancel',
            role: 'Cancel',
            cssClass: 'icon-color',
            handler: () => {
              console.log('Cancel Clicked');
          }
        },
        {
            text : 'Delete',
            cssClass: 'icon-color',
            handler: () => {
              let index = this.contacts.indexOf(cont);
              if(index => -1){
                this.contacts.splice(index,1); 
            }
          }
        }
        ]
      });
        await alert.present();
    }
  }