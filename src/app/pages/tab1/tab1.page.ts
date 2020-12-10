import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private toDoService: ToDoService,
              private router: Router,
              private alertController: AlertController) {}


  async addList() {
    // this.router.navigateByUrl('/tabs/tab1/aggregate');
    const alert = await this.alertController.create({
      header: 'New list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
        }
      },
      {
        text: 'Create',
        handler: (data) => {
          console.log(data);
          if (data['title'].length === 0) return
          const listId = this.toDoService.createList(data['title']);

          this.router.navigateByUrl(`tabs/tab1/aggregate/${listId}`);
        }
      }
    ]
    });

    alert.present();
  }
}
