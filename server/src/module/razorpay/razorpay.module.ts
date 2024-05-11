import { Module } from '@nestjs/common';
import { RazorPayService } from './razorpay.service';
import { RazorPayController } from './razorpay.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentSchema } from './razorpay.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Payment', schema: PaymentSchema }]),
  ],
  providers: [RazorPayService],
  controllers: [RazorPayController],
})
export class RazorPayModule {}
