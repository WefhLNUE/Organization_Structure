import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './modules/organization-structure/services/seeder.service';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  
  try {
    const app = await NestFactory.create(AppModule);
    
    // Enable CORS for development
    app.enableCors();
    
    // Get the seeder service
    const seeder = app.get(SeederService);
    
    // Seed the database
    try {
      logger.log('Starting database seeding...');
      await seeder.seedData();
      logger.log('Database seeded successfully');
    } catch (error) {
      logger.error('Error seeding database', error);
      process.exit(1);
    }

    const port = process.env.PORT || 3000;
    await app.listen(port);
    logger.log(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    logger.error('Error during application startup', error);
    process.exit(1);
  }
}

bootstrap().catch(err => {
  console.error('Fatal error during bootstrap:', err);
  process.exit(1);
});
