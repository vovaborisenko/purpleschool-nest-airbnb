import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { RecordModule } from './record/record.module';

@Module({
  imports: [RoomModule, RecordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
