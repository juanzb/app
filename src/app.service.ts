import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Hola! Bienvenido a la API NestJS 😄';
  }

  getStatus(): string {
    return '✅ El servidor está en línea y funcionando correctamente.';
  }

  getVersion(): string {
    return 'Versión actual: 1.0.0';
  }

  getServerTime(): string {
    const now = new Date();
    return `🕒 Hora actual del servidor: ${now.toLocaleString()}`;
  }

  getHealthCheck(): string {
    return '💚 Estado del sistema: saludable.';
  }

  getAppInfo(): object {
    return {
      app: 'NestJS API',
      author: 'Juan Zarache',
      description: 'Backend básico con rutas de estado e información.',
      environment: process.env.NODE_ENV || 'development',
      uptime: `${process.uptime().toFixed(2)} segundos`,
    };
  }
}
