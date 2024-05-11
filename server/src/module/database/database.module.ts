import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { appConfig } from 'src/config/app.config';

@Module({
  imports: [MongooseModule.forRoot(appConfig.mongodbConnectionString)],
})
export class DatabaseModule {}