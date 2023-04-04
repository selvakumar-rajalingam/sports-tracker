import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [CategoryModule, MongooseModule.forRoot('mongodb+srv://sports-tracker-main:sports-tracker-main-admin-pwd-1@cluster0.0gbesms.mongodb.net/?retryWrites=true&w=majority'), ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
