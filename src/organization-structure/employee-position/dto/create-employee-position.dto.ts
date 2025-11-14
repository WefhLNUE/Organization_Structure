import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateEmployeePositionDto {
  @IsString()
  employeeId: string;
//bing
  @IsString()
  position: string;

  @IsString()
  department: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}
