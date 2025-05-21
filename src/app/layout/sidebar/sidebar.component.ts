import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem } from './data/types';
import { MENU_ITEMS } from './data/data';



@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
 @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();
  selectedItem: MenuItem | null = null;
  menuItems: MenuItem[] = MENU_ITEMS


  ngOnInit(): void {
     this.selectedItem = this.menuItems[0];
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }

    this.selectedItem = item;
  }
}
