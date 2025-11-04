import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status')
  getStatus(): string {
    return this.appService.getStatus();
  }

  @Get('version')
  getVersion(): string {
    return this.appService.getVersion();
  }

  @Get('time')
  getServerTime(): string {
    return this.appService.getServerTime();
  }

  @Get('health')
  getHealthCheck(): string {
    return this.appService.getHealthCheck();
  }

  @Get('info')
  getAppInfo(): object {
    return this.appService.getAppInfo();
  }
}
