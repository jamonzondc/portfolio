import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial loading state as false', (done) => {
    service.loading$.subscribe((loading) => {
      expect(loading).toBe(false);
      done();
    });
  });

  it('should set loading state to true when show is called', (done) => {
    service.show();
    service.loading$.subscribe((loading) => {
      expect(loading).toBe(true);
      done();
    });
  });

  it('should set loading state to false when hide is called', (done) => {
    service.hide();
    service.loading$.subscribe((loading) => {
      expect(loading).toBe(false);
      done();
    });
  });
});
