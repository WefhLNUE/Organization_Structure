import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationStructureModule } from './modules/organization-structure/organization-structure.module';

@Module({
  imports: [
    // ❗ REQUIRED — FIXES YOUR ERROR ❗
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/swp1'),

    OrganizationStructureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
