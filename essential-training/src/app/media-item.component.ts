import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  // @Input('mediaItemToWatch') mediaItem; 'mediaItemToWatch' is the alias name of the property that will be used in the parent component. avoid this if possible?
  @Input() mediaItem; 'mediaItemToWatch'
  @Output() delete = new EventEmitter(); // can alias just like the input property, but it's not necessary

  onDelete() {
    console.log('delete:', this.mediaItem.name);
    this.delete.emit(this.mediaItem);
  }
}

