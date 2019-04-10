import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerModule } from './customer/customer.module';
 
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://reactive-db:123QWEasd-mlab@ds135776.mlab.com:35776/tabela-trifida-app', { useNewUrlParser: true }),
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
