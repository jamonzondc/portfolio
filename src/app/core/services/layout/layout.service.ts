import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  private readonly breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  public isHandset(): Observable<boolean> {
    return this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
        Breakpoints.Handset,
      ])
      .pipe(map((result: BreakpointState): boolean => result.matches));
  }
}
