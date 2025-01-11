import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { Record, RecordSchema } from './entities/record.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Record.name,
        schema: RecordSchema,
      },
    ]),
  ],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
