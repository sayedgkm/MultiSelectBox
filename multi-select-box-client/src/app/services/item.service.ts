import { Injectable } from '@angular/core';
import { selectItems } from '../mock-data/mockSelectItem';
import { selectItem } from '../models/selectItem';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor() { }

  getAvailableItems() {
    return selectItems;
  }

  getAssignedItems() {
    const item : selectItem[] = [
      {value: "20", name: "Mazda Axela"},
      {value: "21", name: "Lancer Ex"},
      {value: "22", name: "Honda Grace"},
      {value: "23", name: "Honda City"},
      {value: "24", name: "Honda fit"},
      {value: "25", name: "Honda accord"},
      {value: "26", name: "Honda Civic"},
    ];
    return item;
  }
}
