import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Record, RecordDocument } from './entities/record.entity';

@Injectable()
export class RecordService {
  constructor(@InjectModel(Record.name) private recordModel: Model<RecordDocument>) {}

  create(createRecordDto: CreateRecordDto) {
    return this.recordModel.create(createRecordDto);
  }

  findAll() {
    return this.recordModel.find().exec();
  }

  findOne(id: string) {
    return this.recordModel.findById(id).exec();
  }

  findByRoomAndDate(room: string, date: Date) {
    return this.recordModel.findOne({ room, date }).exec();
  }

  update(id: string, updateRecordDto: UpdateRecordDto) {
    return this.recordModel.findByIdAndUpdate(id, updateRecordDto).exec();
  }

  remove(id: string) {
    return this.recordModel.findByIdAndDelete(id).exec();
  }
}
