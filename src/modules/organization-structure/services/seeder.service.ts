// src/modules/organization-structure/services/seeder.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department, DepartmentDocument } from '../schemas/departments.schema';
import { Position, PositionDocument } from '../schemas/positions.schema';

@Injectable()
export class SeederService implements OnModuleInit {
  constructor(
    @InjectModel(Department.name) private departmentModel: Model<DepartmentDocument>,
    @InjectModel(Position.name) private positionModel: Model<PositionDocument>,
  ) {}

  async onModuleInit() {
    await this.seedData();
  }

  async seedData() {
    // Clear existing data
    await this.positionModel.deleteMany({});
    await this.departmentModel.deleteMany({});

    // Create some dummy departments
    const engineering = await this.departmentModel.create({
      name: 'Engineering',
      code: 'ENG',
      description: 'Responsible for product development',
      isActive: true
    });

    const hr = await this.departmentModel.create({
      name: 'Human Resources',
      code: 'HR',
      description: 'Handles recruitment and employee relations',
      isActive: true
    });

    const marketing = await this.departmentModel.create({
      name: 'Marketing',
      code: 'MKT',
      description: 'Responsible for branding and promotion',
      isActive: true
    });

    // Create positions array with department IDs
    const positions = [
      {
        title: 'Software Engineer',
        department: engineering._id,
        payGrade: 'Level 2',
        code: 'SE01'
      },
      {
        title: 'Product Manager',
        department: engineering._id,
        payGrade: 'Level 3',
        code: 'PM01'
      },
      {
        title: 'HR Manager',
        department: hr._id,
        payGrade: 'Level 2',
        code: 'HRM01'
      },
      {
        title: 'Marketing Director',
        department: marketing._id,
        payGrade: 'Level 4',
        code: 'MKT01'
      }
    ];

    // Create positions
    const createdPositions = await this.positionModel.create(positions);
    
    console.log('Database seeded successfully');
    return { departments: [engineering, hr, marketing], positions: createdPositions };
  }
}
