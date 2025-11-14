import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema({ timestamps: true })
export class Department {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string; // e.g., FIN, HR, ENG

  @Prop({ type: Types.ObjectId, ref: 'Department', default: null })
  parentDepartment?: Types.ObjectId;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: Date, default: null })
  deactivatedAt?: Date; // historical closure
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
