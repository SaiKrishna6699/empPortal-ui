import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navicon',
  templateUrl: './navicon.component.html',
  styleUrls: ['./navicon.component.scss'],
})
export class NaviconComponent {
  @Input('title')
  title: string = 'Home';
  isActive: boolean = false;
  @Input('link')
  link: string = 'home';
  @Input('icon')
  icon: string = '';

  constructor(private router: Router) {}

  onClick() {
    console.log(this.link);
    this.router.navigate([`/${this.link}`]);
  }
}
