import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends GlobalService implements OnInit {

  ngOnInit() {
  }

  public goFacebook(): void {
    window.open('https://www.facebook.com/birdsbay.be/', '_self');
  }

  public goHelp(): void {
    this.router.navigate(['/nousaider']);
  }

  public gallerie(): void {
    this.router.navigate(['/gallerie']);
  }

}
