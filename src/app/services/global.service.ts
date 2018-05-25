import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class GlobalService {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

}
