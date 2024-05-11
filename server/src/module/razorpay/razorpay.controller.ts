import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Response, Request } from 'express';
import { Model } from 'mongoose';
import { validatePaymentVerification } from 'razorpay/dist/utils/razorpay-utils';
import { appConfig } from 'src/config/app.config';
import { instance } from 'src/main';
import { Payment } from './razorpay.model';

@Controller('razorpay')
export class RazorPayController {
  @InjectModel('Payment') private readonly paymentModel: Model<Payment>;
  @Post('checkout')
  async checkout(@Res() res: Response, @Req() req: Request) {
    var options = {
      amount: req.body.amount * 100, // amount in the smallest currency unit
      currency: 'INR',
      receipt: 'order_rcptid_11',
    };
    const order = await instance.orders.create(options);
    console.log(order);

    res.send(order);
  }

  @Get()
  async getKey(@Res() res: Response) {
    res.json(appConfig.key_id);
  }

  @Post('verification')
  async verification(@Res() res: Response, @Req() req: Request) {
    const { razorpay_signature, razorpay_order_id, razorpay_payment_id } =
      req.body;

    const isPaymentValid = await validatePaymentVerification(
      { order_id: razorpay_order_id, payment_id: razorpay_payment_id },
      razorpay_signature,
      appConfig.key_secret,
    );
    console.log(isPaymentValid);

    if (isPaymentValid) {
      await this.paymentModel.create({
        razorpay_signature,
        razorpay_order_id,
        razorpay_payment_id,
      });
    } else {
      throw new BadRequestException('Payment Failed!');
    }

    res.redirect(`http://localhost:5173/success/${razorpay_payment_id}`);
  }
}
