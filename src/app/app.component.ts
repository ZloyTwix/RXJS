import { Component } from '@angular/core';
import {debounceTime, Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  change(text :string){
    const seatch$ = new Observable(observer =>{
      observer.next(text);
    });
     seatch$.pipe(debounceTime(500)).subscribe(value => {
      console.log(value);
    });
  }
}
