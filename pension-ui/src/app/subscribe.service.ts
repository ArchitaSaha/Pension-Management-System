import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService
{
    assignValue(loggedIn: boolean)
    {
        const SubscribeObservable = new Observable((observer) => {
            // observer.next('Angular');
            observer.next(!loggedIn);
        });
        return SubscribeObservable;
    }
}