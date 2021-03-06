import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor(private http: HttpClient) { }

  soma(n1, n2) {
    return n1 + n2;
  }

  getTodos() {
    return this.http.get('http://localhost:3000');
  }
}
