import { TestBed } from '@angular/core/testing';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LayoutService } from './layout.service';
import { of } from 'rxjs';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakpointObserver],
    });
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if the screen is a handset', () => {
    (service as any).breakpointObserver.observe = jest
      .fn()
      .mockReturnValue(of({ matches: true }));

    service.isHandset().subscribe((isHandset: boolean) => {
      expect(isHandset).toBeTruthy();
    });
  });

  it('should return false if the screen is not a handset', () => {
    (service as any).breakpointObserver.observe = jest
      .fn()
      .mockReturnValue(of({ matches: false }));

    service.isHandset().subscribe((isHandset: boolean) => {
      expect(isHandset).toBeFalsy();
    });
  });
});
