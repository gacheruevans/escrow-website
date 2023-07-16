import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrdersModule } from './orders/orders.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [UserModule, TransactionsModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
