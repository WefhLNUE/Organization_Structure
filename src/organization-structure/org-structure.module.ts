import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DepartmentsController } from './departments/departments.controller';
import { DepartmentsService } from './departments/departments.service';
import { Department, DepartmentSchema } from './departments/department.schema';

import { PositionsController } from './positions/positions.controller';
import { PositionsService } from './positions/positions.service';
import { Position, PositionSchema } from './positions/position.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
      { name: Position.name, schema: PositionSchema },
    ]),
  ],
  controllers: [DepartmentsController, PositionsController],
  providers: [DepartmentsService, PositionsService],
})
export class OrgStructureModule {}
