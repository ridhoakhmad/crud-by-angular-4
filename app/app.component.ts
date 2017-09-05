import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD BY ANGULAR 4';

  private apiUrl = 'http://localhost:3000/movies';
  result: string[];

  constructor(private http:Http){
    console.log('Hello this is read data json');
    this.getMovies();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiUrl).map((res: Response) => res.json())
  }

  getMovies(){
    this.getData().subscribe(data => {
      console.log(data);
      this.result = data['result'];
    })
  }

}
