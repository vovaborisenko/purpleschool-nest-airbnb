import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { Status } from './entities/record.entity';
import { RECORD_CONFLICTED } from './record.constants';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post()
  async create(@Body() createRecordDto: CreateRecordDto) {
    const recordDocument = await this.recordService.findByRoomAndDate(
      createRecordDto.room,
      createRecordDto.date,
    );

    if (recordDocument?.status === Status.Active) {
      throw new HttpException(RECORD_CONFLICTED, HttpStatus.CONFLICT);
    }

    return this.recordService.create(createRecordDto);
  }

  @Get()
  findAll() {
    return this.recordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordDto: UpdateRecordDto) {
    return this.recordService.update(id, updateRecordDto);
  }

  @Patch('cancel/:id')
  cancel(@Param('id') id: string) {
    return this.recordService.update(id, { status: Status.Canceled });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordService.remove(id);
  }
}
