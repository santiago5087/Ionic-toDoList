import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() finished = true;

  constructor(public toDoService: ToDoService,
              private router: Router) { }

  ngOnInit() {}

  listSelected(list: List) {
    if(this.finished) this.router.navigate(['/tabs/tab2/aggregate', list.id]);
    else this.router.navigate(['/tabs/tab1/aggregate', list.id]);
  }

  deleteList(list: List) {
    this.toDoService.deleteList(list);
  }

  async editNameList(list: List) {
    
  }

}
