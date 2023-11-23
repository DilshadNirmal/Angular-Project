import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  assignValue() {
    const SubscribeObservable = new Observable((observer) => {
      observer.next('Angular');
    });
    return SubscribeObservable;
  }
}
