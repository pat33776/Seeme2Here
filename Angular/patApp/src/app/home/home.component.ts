import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

//import { User } from '@app/_models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = false;


  constructor() { }

  ngOnInit() { }

}
