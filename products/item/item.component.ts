import { Component, Input, OnInit } from '@angular/core';
import { CurrencyDecimalPointsPipe } from 'src/app/shared';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input()src:string='';
@Input()name:string='';
@Input()price:number=0;
@Input()currency:string='';
@Input()country_code:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
