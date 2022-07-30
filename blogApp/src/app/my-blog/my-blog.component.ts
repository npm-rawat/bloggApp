import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css'],
})
export class MyBlogComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(public blogService: BlogService) {}
  ngOnInit(): void {}

  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title || !content) {
      return;
    }
    this.blogService.addBlog({ title, content } as Blog).subscribe((blog) => {
      this.blogs.push(blog);
    });
  }
}
