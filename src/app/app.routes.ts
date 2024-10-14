import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./public/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'blog:id',
        loadComponent: () => import('./public/blog/blog.component').then(c => c.BlogComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
