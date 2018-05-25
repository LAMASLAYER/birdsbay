import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-nousaider',
  templateUrl: './nousaider.component.html',
  styleUrls: ['./nousaider.component.css']
})
export class NousaiderComponent extends GlobalService implements OnInit {

  private bene: boolean;
  private give: boolean;

  ngOnInit() {
    this.bene = true;
  }

  public getBene(): boolean {
    return this.bene;
  }

  public setBene(value: boolean) {
    this.bene = value;
    this.give = !value;
  }

  public getGive(): boolean {
    return this.give;
  }

  public setGive(value: boolean) {
    this.give = value;
    this.bene = !value;
  }



}
