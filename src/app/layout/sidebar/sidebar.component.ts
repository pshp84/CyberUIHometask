import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

const config = {
  DESKTOP_VIEW_SIZE: 991,
};

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
  isCollapsed: boolean = false;
  @Output() sidebarToggle = new EventEmitter<boolean>(false);
  isHovered: boolean = false;
  isDesktop = window.innerWidth >= config.DESKTOP_VIEW_SIZE;
  subscription: Subscription = new Subscription();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.subscription = this.breakpointObserver
      .observe(['(min-width: 991px)'])
      .subscribe((state: BreakpointState) => {
        this.isDesktop = state.matches;
      });
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.sidebarToggle.emit(true);
    } else {
      this.sidebarToggle.emit(false);
    }
  }

  onSidebarHover(status: boolean) {
    if (this.isCollapsed && this.isDesktop) {
      this.isHovered = status;
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
