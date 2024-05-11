import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Payment {
  @Prop()
  razorpay_order_id: string;

  @Prop()
  razorpay_payment_id: string;

  @Prop()
  razorpay_signature: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);