import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Post } from '../post/post';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, NavComponent, MatButtonModule, MatIconModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  postId: string | null = '';
  post$ : Observable<Post> | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = params.get('id');
      this.getPostDetails();
    });
  }

  getPostDetails() {
    if(this.postId !== null) {
      this. post$ = this.dataService.getPostDetails(this.postId);
    }
  }

  navigateToPosts() {
    this.router.navigate(['']);
  }
}
