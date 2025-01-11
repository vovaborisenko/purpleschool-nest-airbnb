import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

enum Accommodation {
  Single = 'SGL',
  Double = 'DBL',
  Twin = 'TWN',
  Triple = 'TRPL',
  Quadriple = 'QDPL',
}

enum View {
  GardenView = 'GV',
  BeachView = 'BV',
  CityView = 'CV',
  InsideView = 'IV',
  MountainView = 'MV',
}

export type RoomDocument = HydratedDocument<Room>;

@Schema({ timestamps: true })
export class Room {
  @Prop({ unique: true })
  number: number;

  @Prop({ enum: Accommodation })
  accommodation: Accommodation;

  @Prop({ enum: View })
  view: View;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
