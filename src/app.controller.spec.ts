import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return a hello message', () => {
      expect(appController.getHello()).toBe(appService.getHello());
    });
  });

  describe('status', () => {
    it('should return server status', () => {
      expect(appController.getStatus()).toBe(appService.getStatus());
    });
  });

  describe('version', () => {
    it('should return the app version', () => {
      expect(appController.getVersion()).toBe(appService.getVersion());
    });
  });

  describe('time', () => {
    it('should return the server time string', () => {
      const result = appController.getServerTime();
      expect(typeof result).toBe('string');
      expect(result).toContain('Hora actual del servidor');
    });
  });

  describe('health', () => {
    it('should return system health status', () => {
      expect(appController.getHealthCheck()).toBe(appService.getHealthCheck());
    });
  });

  describe('info', () => {
    it('should return an object with app info', () => {
      const result = appController.getAppInfo();
      expect(result).toBeInstanceOf(Object);
      expect(result).toHaveProperty('app');
      expect(result).toHaveProperty('author');
      expect(result).toHaveProperty('description');
    });
  });
});
