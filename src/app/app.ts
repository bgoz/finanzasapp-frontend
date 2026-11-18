import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from './services/api';
import { Dashboard} from './components/dashboard/dashboard';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            MatToolbarModule, 
            MatButtonModule,
            Dashboard,            
            MatCardModule
  ],
  templateUrl: './app.html', // Fíjate que apunta a app.html, no a app.component.html
  styleUrl: './app.css'
})
export class App {
  title = 'finanzasapp-frontend';
}