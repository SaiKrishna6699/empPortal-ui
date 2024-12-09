import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navcard',
  templateUrl: './navcard.component.html',
  styleUrls: ['./navcard.component.scss'],
})
export class NavcardComponent {
  @Input('title')
  title: string = '';
  @Input('icon')
  icon: string = '';
  @Input('desc')
  desc: string = '';
  @Input('bg-color')
  bgColor: string = '';


}
