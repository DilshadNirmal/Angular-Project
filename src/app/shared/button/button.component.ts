import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input('disabled')
  disabled = false;

  @Input('size')
  size = 'S';

  @Input('shade')
  shade = 'NA';

  @Input('animation')
  animation = 'F';

  @Input('name')
  name = '';

  constructor() { }

  ngOnInit(): void {

  }
}
