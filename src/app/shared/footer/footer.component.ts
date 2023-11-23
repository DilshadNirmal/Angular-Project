import { Component, OnInit } from '@angular/core';
import { SubscribeService } from 'src/app/subscribe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private SubscribeService: SubscribeService) { }

  ngOnInit(): void {
  }

  ngClick() {
    this.SubscribeService.assignValue().subscribe((result)=> {
      alert('you have been subscribed! 😊')
    });
  }

}
