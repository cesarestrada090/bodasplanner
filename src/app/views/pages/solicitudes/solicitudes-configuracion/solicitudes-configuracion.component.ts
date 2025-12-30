import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solicitudes-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h3>
        <i class="feather icon-settings"></i>
        Configuración de Solicitudes
      </h3>
    </div>

    <div class="configuracion-card">
      <h5 class="card-title">Emails que reciben las solicitudes</h5>
      
      <div class="email-default">
        <i class="feather icon-mail"></i>
        <span class="email">gerencia&#64;bodasplanner.com</span>
        <span class="badge badge-primary">por defecto</span>
      </div>

      <p class="help-text">
        Añade otros emails, separados por coma ',' para que reciban también las solicitudes.
      </p>

      <div class="form-group">
        <textarea 
          class="form-control" 
          rows="3"
          [(ngModel)]="emailsAdicionales"
          placeholder="ejemplo@correo.com, otro@correo.com"
        ></textarea>
      </div>

      <div class="action-buttons">
        <button class="btn btn-primary" (click)="guardarConfiguracion()">
          <i class="feather icon-save"></i>
          Guardar cambios
        </button>
      </div>

      @if (guardadoExitoso) {
        <div class="alert alert-success">
          <i class="feather icon-check-circle"></i>
          Configuración guardada correctamente
        </div>
      }
    </div>
  `,
  styles: [`
    .page-header {
      margin-bottom: 2rem;

      h3 {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin: 0;
        font-weight: 600;

        i {
          color: #E97C9E;
          font-size: 1.75rem;
        }
      }
    }

    .configuracion-card {
      background: #fff;
      border-radius: 0.75rem;
      border: 2px solid #f0f0f0;
      padding: 2rem;
      max-width: 800px;

      .card-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 1.5rem;
      }

      .email-default {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: #f8f9fa;
        border-radius: 0.5rem;
        margin-bottom: 1.5rem;

        i {
          color: #E97C9E;
          font-size: 1.25rem;
        }

        .email {
          flex: 1;
          font-family: 'Courier New', monospace;
          color: #333;
          font-weight: 500;
        }

        .badge {
          font-size: 0.75rem;
          padding: 0.35rem 0.65rem;
        }

        .badge-primary {
          background: #E97C9E;
          color: #fff;
        }
      }

      .help-text {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.6;
      }

      .form-group {
        margin-bottom: 1.5rem;

        .form-control {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e0e0e0;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;

          &:focus {
            outline: none;
            border-color: #E97C9E;
            box-shadow: 0 0 0 3px rgba(233, 124, 158, 0.1);
          }
        }
      }

      .action-buttons {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1rem;

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;

          i {
            font-size: 1.1rem;
          }
        }

        .btn-primary {
          background: linear-gradient(135deg, #E97C9E 0%, #d65d84 100%);
          color: #fff;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(233, 124, 158, 0.3);
          }
        }
      }

      .alert {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: 0.5rem;
        animation: slideDown 0.3s ease;

        i {
          font-size: 1.25rem;
        }
      }

      .alert-success {
        background: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;

        i {
          color: #28a745;
        }
      }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 767px) {
      .configuracion-card {
        padding: 1.5rem;

        .email-default {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  `]
})
export class SolicitudesConfiguracionComponent {
  emailsAdicionales = 'ines.garcia1872@gmail.com,gerencia@bodasplanner.com';
  guardadoExitoso = false;

  guardarConfiguracion() {
    // Aquí iría la lógica para guardar en el backend
    console.log('Guardando configuración:', {
      emailPrincipal: 'gerencia@bodasplanner.com',
      emailsAdicionales: this.emailsAdicionales
    });

    this.guardadoExitoso = true;
    setTimeout(() => {
      this.guardadoExitoso = false;
    }, 3000);
  }
}
