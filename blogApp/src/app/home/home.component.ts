import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs));
  }

  delete(blog: Blog): void {
    this.blogs = this.blogs.filter((b) => b != blog);
    this.blogService.deleteBlog(blog.id).subscribe();
  }

  add(title: String, content: String): void {
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
