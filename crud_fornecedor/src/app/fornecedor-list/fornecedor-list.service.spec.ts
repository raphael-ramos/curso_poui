import { TestBed } from '@angular/core/testing';

import { FornecedorListService } from './fornecedor-list.service';

describe('FornecedorListService', () => {
  let service: FornecedorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecedorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
