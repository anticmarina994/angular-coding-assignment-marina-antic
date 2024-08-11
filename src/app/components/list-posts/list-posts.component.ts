import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../post/post';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, PostComponent, NavComponent],
  providers: [DataService],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit {
  posts$: Observable<Post[]> | undefined;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
   this.posts$ = this.dataService.getPosts().pipe(
    map((posts) => posts.slice(0, 10))
   );
  }

  postClicked(event: number) {
    this.router.navigate(['/post', event]);
  }
}
