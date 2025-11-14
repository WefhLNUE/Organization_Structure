import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrgStructureModule } from './organization-structure/org-structure.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/hr_system'),
    OrgStructureModule,
  ],
})
export class AppModule {}
