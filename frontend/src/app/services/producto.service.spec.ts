import { TestBed } from '@angular/core/testing';

import { productoService } from './producto.service';

describe('productoService', () => {
  let service: productoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(productoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
