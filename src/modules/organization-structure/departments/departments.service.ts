import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department, DepartmentDocument } from '../schemas/departments.schema';

@Injectable()
export class DepartmentsService {
  private readonly logger = new Logger(DepartmentsService.name);

  constructor(
    @InjectModel(Department.name) 
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {
    this.logger.log('DepartmentsService initialized');
  }

  async findAll() {
    try {
      return await this.departmentModel.find().exec();
    } catch (error) {
      this.logger.error(`Error finding departments: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      return await this.departmentModel.findById(id).exec();
    } catch (error) {
      this.logger.error(`Error finding department with id ${id}: ${error.message}`, error.stack);
      throw error;
    }
  }
}
