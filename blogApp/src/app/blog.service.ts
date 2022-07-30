import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Blog } from './blog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private blogsUrl = 'api/blogs'; // URL to web API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getBlog(id: number): Observable<Blog> {
    const url = `${this.blogsUrl}/${id}`;
    return this.http
      .get<Blog>(url)
      .pipe(catchError(this.handleError<Blog>(`getBlog id=${id}`)));
  }

  getBlogs(): Observable<Blog[]> {
    return this.http
      .get<Blog[]>(this.blogsUrl)
      .pipe(catchError(this.handleError<Blog[]>('getBlogs', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateBlog(blog: Blog): Observable<any> {
    return this.http
      .put(this.blogsUrl, blog, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateBlog')));
  }

  addBlog(blog: Blog): Observable<Blog> {
    return this.http
      .post<Blog>(this.blogsUrl, blog, this.httpOptions)
      .pipe(catchError(this.handleError<Blog>('addBlog')));
  }

  deleteBlog(id: number): Observable<Blog> {
    const url = `${this.blogsUrl}/${id}`;
    return this.http
      .delete<Blog>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Blog>('deleteBlog')));
  }
}
