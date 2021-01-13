import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './cards/cards.controller';
import { ConfigModule } from '@nestjs/config';
import { Card } from './cards/card.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Card]),
  ],
  controllers: [AppController, CardsController],
  providers: [AppService],
})
export class AppModule {}
