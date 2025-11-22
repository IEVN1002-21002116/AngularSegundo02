import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/*import { DistanciaComponent } from "./formularios/distancia/distancia.component";*/
/*import { MultiplicarComponent } from "./formularios/multiplicar/multiplicar.component";*/
import {initFlowbite} from 'flowbite';
import { NavbarComponent } from "./navbar/navbar.component";
import { DistanciaComponent } from "./formularios/distancia/distancia.component";
import { TemhComponent } from "./tem/temh/temh.component";
import { TempComponent } from "./tem/temp/temp.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
