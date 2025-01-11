import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Room } from '../../room/entities/room.entity';

export enum Status {
  Active = 1,
  Canceled,
}

export type RecordDocument = mongoose.HydratedDocument<Record>;

@Schema({ timestamps: true })
export class Record {
  @Prop({ enum: Status, default: Status.Active })
  status: Status;

  @Prop(Date)
  date: Date;

  @Prop({ type: mongoose.Types.ObjectId, ref: Room.name })
  room: Room;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
