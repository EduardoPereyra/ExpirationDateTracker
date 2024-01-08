import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  public appPages = [
    { title: 'Products list', url: '/products-list', icon: 'list' },
    /*    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
        { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
        { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
        { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
        { title: 'Spam', url: '/folder/Spam', icon: 'warning' },*/
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

  ngOnInit() {}

}
