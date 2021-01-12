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
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      host: process.env.MONGODB_CONNECTION_URL,
      port: 27017,
      database: process.env.MONGODB_DATABSE,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoLoadEntities: true
    }),
    TypeOrmModule.forFeature([Card])
  ],
  controllers: [AppController, CardsController],
  providers: [AppService],
})
export class AppModule {}
