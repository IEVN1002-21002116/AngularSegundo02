import { Routes } from '@angular/router';

export default [
  {
    path: 'distancia',
    loadComponent: () => import('./distancia/distancia.component').then(m => m.DistanciaComponent)
  },
  {
    path: 'multiplicar',
    loadComponent: () => import('./multiplicar/multiplicar.component').then(m => m.MultiplicarComponent)
  },
  {
    path: 'zodiaco',
    loadComponent: () => import('./zodiaco/zodiaco.component').then(m => m.ZodiacoComponent)
  },
] as Routes
