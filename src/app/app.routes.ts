import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

export const routes: Routes = [
    {
      path: '',
      component: ListPostsComponent,
    },
    {
        path: 'post/:id',
        component: PostDetailsComponent
    }
  ];
