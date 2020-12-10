import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  myList: List[] = [];

  constructor() {
    const list1 = new List('Gather the infinity stones');
    const list2 = new List('Heroes to disappear');

    this.myList.push(list1, list2);
    console.log(this.myList);
  }

  createList(title: string) {
    const newList = new List(title);
    this.myList.push(newList);
  }

}
