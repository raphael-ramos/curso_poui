import { TestBed } from '@angular/core/testing';

import { FornecedorFormService } from './fornecedor-form.service';

describe('FornecedorFormService', () => {
  let service: FornecedorFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornecedorFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
