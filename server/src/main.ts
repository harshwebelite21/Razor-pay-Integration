import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config/app.config';
import Razorpay from 'razorpay';
import cors from 'cors';

export const instance = new Razorpay({
  key_id: appConfig.key_id,
  key_secret: appConfig.key_secret,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(appConfig.port);
  console.log(`Server is running on port ${appConfig.port}`);
}
bootstrap();
