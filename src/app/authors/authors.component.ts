import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
    <h2>{{this.authors.length + getTitle()}}</h2>
    <ul>
      <li *ngFor="let author of authors">
        {{author}}
      </li>
    </ul>
    <div (click) = "onDivClicked($event)">
      <button (click) ="onSave($event)" class="btn btn-primary" [class.active] ="isActive">Save</button>
    </div>
    <!-- <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/> -->
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/> <br/>
    {{authorInfo.name | uppercase}} <br/>
    {{authorInfo.rating | number:'1.1-1'}} <br/>
    {{authorInfo.bookTitle}} <br/>
    {{authorInfo.price | currency:'AUD':true:'2.2-2'}} <br/>
    {{authorInfo.releaseDate | date:'shortDate'}} <br/>
    <hr/>
    {{text | summary:10}}
  `
})
export class AuthorsComponent {
  title = "Authors";
  authors;
  isActive = true;
  email = "ian@gmail.com";
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.";

  authorInfo = {
    name: "Billy Bob",
    rating: 4.975,
    bookTitle: "Lord of the Blings",
    price: 23.30,
    releaseDate: new Date(2023, 4, 18)
  };

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  onSave($event: any) {
    console.log("Button was clicked", $event);
  }

  onDivClicked($event: any) {
    $event.stopPropagation();
    console.log("Div was clicked")
  }

  onKeyUp() {
    console.log(this.email);
  }

  getTitle() {
    return this.title;
  }
}

