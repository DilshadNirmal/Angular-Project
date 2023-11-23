import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('disabled')
  disabled = false;

  @Input('size')
  size = 'S'; // S,M,L

  @Input('shade')
  shade = 'NA'; // D,L,W,NA

  @Input('animation')
  animation='F'; // C,F

  @Input('name')
  name='';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onButtonClick(event: Event) {
    event.preventDefault();
    this.router.navigate(['/footer']);
  }


}
