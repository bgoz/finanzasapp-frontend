import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [CommonModule, MatCardModule],
  selector: 'app-dashboard',
  standalone: true,
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit{
  resumen: any = { totalIngresos: 0, totalGastos: 0, balance: 0 };

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.apiService.obtenerDashboard(1).subscribe({
      next: (data) => {
        this.resumen = data; // Guardamos los datos en la variable
        this.cdr.detectChanges(); // Forzamos la detección de cambios
        console.log('Datos del dashboard cargados:', this.resumen);
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
