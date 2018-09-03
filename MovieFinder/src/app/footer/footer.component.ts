import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  author: string = 'Svetlio';
  product: string = 'MoviesFinder';
  year: string = '2018';

  constructor() { }

  ngOnInit() {
  }

}
