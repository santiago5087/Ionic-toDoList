import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.page.html',
  styleUrls: ['./aggregate.page.scss'],
})
export class AggregatePage implements OnInit {

  list: List;
  nameItem = '';

  constructor(private toDoService: ToDoService,
              private activatedRoute: ActivatedRoute) {
    
    const listId = this.activatedRoute.snapshot.paramMap.get('listId');
    this.list = toDoService.getList(listId);

  }

  ngOnInit() {
  }

  aggregateItem() {
    if(this.nameItem.length == 0) return;
    const newItem = new ListItem(this.nameItem);
    this.list.items.push(newItem);
    this.nameItem = '';

    /* Esto se pude hacer ya que los objetos en Javascript son pasados como referencias, por lo tanto
    un cambio acá, también me modificará el objeto que se encuentra en el servicio
    */
    this.toDoService.saveStorage();
  }

  changeCheck() {
    const pendings = this.list.items.filter(item => !item.done).length;
    if(pendings === 0) {
      this.list.doneAt = new Date();
      this.list.done = true;
    } else {
      this.list.doneAt = null;
      this.list.done = false;
    }

    this.toDoService.saveStorage();
  }

  delete(i: number) {
    this.list.items.splice(i, 1);
    this.toDoService.saveStorage();
  }

}
