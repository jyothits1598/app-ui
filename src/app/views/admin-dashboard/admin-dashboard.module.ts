import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { StorePendingListComponent } from './store-pending-list/store-pending-list.component';
import { StorePendingDetailsComponent } from './store-pending-details/store-pending-details.component';
import { StorePendingContainerComponent } from './store-pending-container/store-pending-container.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'pending',
        component: StorePendingContainerComponent,
        children: [
          {
            path: '',
            component: StorePendingListComponent
          },
          {
            path: 'id',
            component: StorePendingDetailsComponent
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'pending',
        pathMatch: 'full'
      }
    ]
  },
]
const adminDashboardRouting = RouterModule.forChild(routes);

@NgModule({
  declarations: [AdminDashboardComponent, StorePendingListComponent, StorePendingDetailsComponent, StorePendingContainerComponent],
  imports: [
    CommonModule,
    adminDashboardRouting
  ]
})
export class AdminDashboardModule { }
