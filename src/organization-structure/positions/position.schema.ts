import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PositionDocument = HydratedDocument<Position>;

@Schema({ timestamps: true })
export class Position {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  departmentId: string;

  @Prop()
  reportsTo?: string;

  @Prop({ required: true })
  payGrade: string;

  @Prop({ default: true })
  active: boolean;
}

export const PositionSchema = SchemaFactory.createForClass(Position);
