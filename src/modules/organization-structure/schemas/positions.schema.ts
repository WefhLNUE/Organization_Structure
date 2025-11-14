import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PositionDocument = Position & Document;

@Schema({ timestamps: true })
export class Position {
  @Prop({ required: true })
  title: string;  // Position title, e.g., "Software Engineer"

  @Prop({ type: Types.ObjectId, ref: 'Department', required: true })
  department: Types.ObjectId;  // Reference to Department

  @Prop({ required: true })
  payGrade: string;  // Pay grade of the position (e.g., "Level 2")

  @Prop({ required: true, unique: true })
  code: string;  // Unique code for the position, e.g., "SE01"

  @Prop({ type: Types.ObjectId, ref: 'Position', default: null })
  reportingTo?: Types.ObjectId;  // Reference to the position this one reports to (optional)
}

export const PositionSchema = SchemaFactory.createForClass(Position);
