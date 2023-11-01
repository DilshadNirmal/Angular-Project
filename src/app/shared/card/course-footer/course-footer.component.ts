import { Component, OnInit,Input } from '@angular/core';
import { Collection } from 'src/app/models/collections.model';

@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.css']
})
export class CourseFooterComponent implements OnInit {

  @Input('collection')
  course!:Collection;

  constructor() { }

  ngOnInit(): void {
  }

}
