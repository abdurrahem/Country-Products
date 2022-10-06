import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input()src:string='';
@Input()name:string='';
@Input()price:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
