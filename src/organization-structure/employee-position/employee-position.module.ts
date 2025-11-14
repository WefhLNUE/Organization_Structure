import { Module } from '@nestjs/common';
import { EmployeePositionService } from './employee-position.service';
import { EmployeePositionController } from './employee-position.controller';


@Module({
  providers: [EmployeePositionService],
  controllers: [EmployeePositionController]
})
export class EmployeePositionModule {}
//bing
