import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  items = Array(7);

  constructor(private popOverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number) {
    console.log(valor);
    this.popOverCtrl.dismiss({item: valor});
  }

}
