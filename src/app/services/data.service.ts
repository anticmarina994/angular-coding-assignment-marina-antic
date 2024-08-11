import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../components/post/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts() {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPostDetails(id:string) {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }
}