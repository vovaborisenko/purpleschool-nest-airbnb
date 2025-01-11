import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
    const host = this.configService.get('MONGO_HOST');
    const port = this.configService.get('MONGO_PORT') || 27017;
    const dbName = this.configService.get('MONGO_DB_NAME');
    const user = this.configService.get('MONGO_USER');
    const password = this.configService.get('MONGO_PASSWORD');
    const uri = `mongodb://${user}:${password}@${host}:${port}/${dbName}?authSource=admin`;

    return {
      uri,
    };
  }
}
