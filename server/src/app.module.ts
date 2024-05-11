import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module/database/database.module';
import { RazorPayModule } from './module/razorpay/razorpay.module';

@Module({
  imports: [DatabaseModule, RazorPayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
