import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popOverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {

    console.log('Evento', ev);
    
    const popover = await this.popOverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });

    await popover.present();

    const datos = await popover.onWillDismiss();

    console.log(datos);

  }
}
