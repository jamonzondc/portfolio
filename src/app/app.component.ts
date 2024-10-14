import { Component, inject, OnInit } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '@shared/components/toolbar/toolbar.component';
import { LayoutService } from './core/services/layout/layout.service';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { SidenavComponent } from './shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ToolbarComponent,
    MatIconButton,
    MatIcon,
    MatSidenavContainer,
    MatSidenav,
    SidenavComponent,
    LoadingComponent,
    MatSidenavContent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private layoutService: LayoutService = inject(LayoutService);
  public isHandset: boolean = false;
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  logoSrc: string = 'assets/images/logo/logo_sd.png';

  public ngOnInit(): void {
    this.layoutService.isHandset().subscribe((isHandset: boolean): void => {
      this.isHandset = isHandset;
    });
  }
}
