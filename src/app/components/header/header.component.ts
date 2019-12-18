import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string = '';

  returnTo: string = '';

  constructor(private location: Location) { }

  ngOnInit() {
    
  }

  backClick() {
    this.location.back();
  }

}
