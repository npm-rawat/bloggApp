import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs = [
      { id: 1, title: 'My blog 1', content: 'My blog 1 content' },
      { id: 2, title: 'My blog 2', content: 'My blog 2 content' },
      { id: 3, title: 'My blog 3', content: 'My blog 3 content' },
    ];
    return { blogs };
  }
  constructor() {}

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genNum(blogs: Blog[]): number {
    console.log(
      blogs.length > 0 ? Math.max(...blogs.map((blog) => blog.id)) + 1 : 0
    );
    return blogs.length > 0
      ? Math.max(...blogs.map((blog) => blog.id)) + 1
      : 0;
  }
}
