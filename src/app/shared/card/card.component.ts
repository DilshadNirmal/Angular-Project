import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.model';
import { Collection } from 'src/app/models/collections.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('input')
  input!: Collection | Blog;

  @Input('type')
  type = 'C' // C, B

  constructor() {}

  castToCourse(input:Collection|Blog){
    return input as Collection;
  }

  castToBlog(input:Collection|Blog){
    return input as Blog;
  }

  ngOnInit(): void {

  }
}
