import { TestBed } from '@angular/core/testing';
import { LoadingComponent } from './loading.component';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from '@core/services';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let loadingSubject: BehaviorSubject<boolean>;

  beforeEach(() => {
    loadingSubject = new BehaviorSubject<boolean>(false);

    const loadingServiceMock = {
      loading$: loadingSubject.asObservable(),
    };

    TestBed.configureTestingModule({
      imports: [LoadingComponent],
      providers: [
        { provide: LoadingService, useValue: loadingServiceMock },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial showSpinner value as true', () => {
    expect(component.showSpinner()).toBe(false);
  });

  it('should update showSpinner value when loadingService emits', () => {
    loadingSubject.next(true);
    expect(component.showSpinner()).toBe(true);

    loadingSubject.next(false);
    expect(component.showSpinner()).toBe(false);
  });
});