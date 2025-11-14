import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Position, PositionDocument } from './position.schema';
import { CreatePositionDto } from './dto/create-position.dto';

@Injectable()
export class PositionsService {
  constructor(
    @InjectModel(Position.name)
    private readonly positionModel: Model<PositionDocument>,
  ) {}

  async create(dto: CreatePositionDto): Promise<Position> {
    const pos = new this.positionModel(dto);
    return pos.save();
  }

  async findAll(): Promise<Position[]> {
    return this.positionModel.find().exec();
  }

  async findByDepartment(id: string): Promise<Position[]> {
    return this.positionModel.find({ departmentId: id }).exec();
  }
}
