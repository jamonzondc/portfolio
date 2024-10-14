import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { Page } from '@core/models/page.type';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIcon,
    NgFor,
    NgIf,
    RouterLink,
    MatDivider,
  ],
})
export class SidenavComponent {
  @Input() pages: Page[] = [
    {
      id: '1',
      title: 'Feature Flags',
      icon: 'flag',
      route: 'conf-ima-flags-flows',
      showInMainMenu: true,
    },
    {
      id: '2',
      title: 'Moonshot Tags',
      icon: 'flag',
      route: 'moonshot-tags',
      showInMainMenu: true,
    },
  ];
  @Output() pageSelect: EventEmitter<Page | undefined> = new EventEmitter<
    Page | undefined
  >();
  @Output() logout: EventEmitter<void> = new EventEmitter<void>();

  onSelectPage(page: Page | undefined) {
    this.pageSelect.emit(page);
  }

  onLogout() {
    this.logout.emit();
  }
}
