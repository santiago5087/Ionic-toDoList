import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  myList: List[] = [];

  constructor() {
    this.chargeStorage();
  }

  createList(title: string): number {
    const newList = new List(title);
    this.myList.push(newList);
    this.saveStorage();

    return newList.id;
  }

  getList(id: string | number): List {
    id = Number(id);
    return this.myList.find(listData => listData.id === id);
  }

  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.myList));
  }

  chargeStorage() {
    if(localStorage.getItem('data')) this.myList = JSON.parse(localStorage.getItem('data'));
  }

  deleteList(list: List) {
    this.myList = this.myList.filter(listData => listData.id != list.id);
    this.saveStorage();
  }

  editNameList(list: List, title: string) {
    let index = this.myList.indexOf(list);
    this.myList[index].title = title;

    this.saveStorage();
  }

}
