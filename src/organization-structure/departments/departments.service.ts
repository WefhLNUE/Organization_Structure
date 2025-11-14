import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Department, DepartmentDocument } from './department.schema';
import { CreateDepartmentDto } from './dto/create-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Department.name)
    private readonly departmentModel: Model<DepartmentDocument>,
  ) {}

  async create(dto: CreateDepartmentDto): Promise<Department> {
    const dept = new this.departmentModel(dto);
    return dept.save();
  }

  async findAll(): Promise<Department[]> {
    return this.departmentModel.find().exec();
  }
}
