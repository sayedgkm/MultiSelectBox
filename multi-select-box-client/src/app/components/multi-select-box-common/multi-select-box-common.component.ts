import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { selectItem } from 'src/app/models/selectItem';
import { __assign } from 'tslib';

@Component({
  selector: 'app-multi-select-box-common',
  templateUrl: './multi-select-box-common.component.html',
  styleUrls: ['./multi-select-box-common.component.scss']
})
export class MultiSelectBoxCommonComponent implements OnInit {

  availableItems? : selectItem[];
  availableItemsSearch? : selectItem[];
  assignedItems? : selectItem[];
  assignedItemsSearch? : selectItem[];
  leftSelectedItem? : string;
  rightSelectedItem? : string;

  constructor(private itemService : ItemService) { }

  ngOnInit(): void {
    this.getAvailbleItem();
    this.getAssignItem();
  }

  getAvailbleItem() : void {
    this.availableItems  = this.itemService.getAvailableItems();
    this.availableItemsSearch = Object.assign([], this.availableItems);
  }

  getAssignItem() : void {
    this.assignedItemsSearch = this.itemService.getAssignedItems();
    this.assignedItems =   Object.assign([], this.assignedItemsSearch);
  }

  onAvailableItemSelect(id: string) {
    this.leftSelectedItem = id;
  }

  onAssignedItemSelect(id: string) : void {
    this.rightSelectedItem = id;
  }

  moveItemRight() {
    if(this.leftSelectedItem == null) {
      return;
    }

    let item : selectItem  = this.availableItemsSearch?.find(x=> x.value == this.leftSelectedItem) as selectItem;
    let idx: number =  this.availableItems?.findIndex(x=> x.value == item.value) as number;
    this.availableItems?.splice(idx, 1);
    idx = this.availableItemsSearch?.findIndex(x=> x.value == item.value) as number;
    this.availableItemsSearch?.splice(idx, 1);
    this.assignedItemsSearch?.push(item);
    this.assignedItems?.push(item);
  }

  moveItemLeft() {
    if(this.rightSelectedItem == null) {
      return;
    }

    let item : selectItem  = this.assignedItems?.find(x=> x.value == this.rightSelectedItem) as selectItem;
    let idx: number =  this.assignedItems?.findIndex(x=> x.value == item.value) as number;
    this.assignedItems?.splice(idx, 1);
    idx = this.assignedItemsSearch?.findIndex(x=> x.value == item.value) as number;
    this.assignedItemsSearch?.splice(idx, 1);
    this.availableItems?.push(item);
    this.availableItemsSearch?.push(item);
  }

  searchAvailableItem(event: any) {
    let strInput : string = event.target.value;
    this.leftSelectedItem = undefined;
    this.availableItemsSearch = Object.assign([], this.availableItems);
    this.availableItemsSearch  = this.availableItemsSearch.filter(x=> x.name.toLocaleLowerCase().indexOf(strInput.toLocaleLowerCase()) > -1);
  }
}
