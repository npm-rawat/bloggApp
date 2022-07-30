import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  blog: Blog | any;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlog(id).subscribe((blog) => (this.blog = blog));
  }

  save(): void {
    if (this.blog) {
      this.blogService.updateBlog(this.blog).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
