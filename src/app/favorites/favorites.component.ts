import { Component } from '@angular/core';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent {
  isFavorite = false;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
