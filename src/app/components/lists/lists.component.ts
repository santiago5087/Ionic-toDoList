import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  /* Como solo hay un ion-list, solo se recupera este. Si hubieran varios, selectedList sería
  un arreglo de ion-list. El selector también podría ser una referencia local, ejm: #lista y
  se ponde como selector: lista
  */
  @ViewChild(IonList) selectedList: IonList;
  @Input() finished = true;

  constructor(public toDoService: ToDoService,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {}

  listSelected(list: List) {
    if(this.finished) this.router.navigate(['/tabs/tab2/aggregate', list.id]);
    else this.router.navigate(['/tabs/tab1/aggregate', list.id]);
  }

  deleteList(list: List) {
    this.toDoService.deleteList(list);
  }

  async editNameList(list: List) {
    const alert = await this.alertController.create({
      header: 'Edit list',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: list.title,
          placeholder: 'List name'
        }
      ],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar');
          this.selectedList.closeSlidingItems();
        }
      },
      {
        text: 'Update',
        handler: (data) => {
          console.log(data);
          if (data['title'].length === 0) return
          else {
            this.toDoService.editNameList(list, data['title']);
            this.selectedList.closeSlidingItems();
          }
        }
      }
    ]});

    await alert.present();
  }

}
