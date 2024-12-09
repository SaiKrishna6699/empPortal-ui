import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NormService {

  constructor(private router: Router) { }

  onClick(link: string) {
    this.router.navigate([link]);
  }
}
