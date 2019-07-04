import { TestBed } from '@angular/core/testing';

import { SomaService } from './soma.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SomaService', () => {
  let httpMock: HttpTestingController = null;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service).toBeTruthy();
  });

  it('deve retornar 7', () => {
    const service: SomaService = TestBed.get(SomaService);
    expect(service.soma(2, 5)).toBe(7);
  })

  it('deve receber todos', () => {
    const service = TestBed.get(SomaService);
    const fakeData = [
      { title: 'Titulo 1', description: 'Descrição 1' },
      { title: 'Titulo 2', description: 'Descrição 2' }
    ];

    service.getTodos().subscribe(res => {
      console.log(res);
      expect(res.length).toBe(2);
      expect(res[0].date).toBeUndefined();
      expect(res[1].title).toBe('Titulo 2');
    });

    const req = httpMock.expectOne('http://localhost:3000');
    expect(req.request.method).toBe('GET');
    req.flush(fakeData);
  });
});
