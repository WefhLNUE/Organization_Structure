import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type EmployeePositionDocument = HydratedDocument<EmployeePosition>;
//helo
@Schema({ timestamps: true })
export class EmployeePosition {
  @Prop({ required: true })
  employeeId: string; // later replace with Employee ObjectId when Employee module exists

  @Prop({ type: Types.ObjectId, ref: 'Position', required: true })
  position: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Department', required: true })
  department: Types.ObjectId;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, default: null })
  endDate?: Date;

  @Prop({ default: true })
  isActive: boolean;
}

export const EmployeePositionSchema = SchemaFactory.createForClass(EmployeePosition);
