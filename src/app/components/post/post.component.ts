import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Post } from './post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor() {}

  @Input() post: Partial<Post> = {};
  @Output() postClickedEvent = new EventEmitter<number>();

  postDetails(id: number | undefined) {
    if(id !== undefined) {
      this.postClickedEvent.emit(id);
    }
  }
}