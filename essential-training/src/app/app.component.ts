import { Component } from '@angular/core';

@Component({
  selector: 'mw-app', // Targets the <app-root> element in index.html.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    // watchedOn: 1294166565384,
    watchedOn: null,
    isFavorite: false
  };

  onMediaItemDelete(mediaItem) {}

}