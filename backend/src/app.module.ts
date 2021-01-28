import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './cards/cards.entity';

@Module({
  imports: [
    CardsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://mongodb:27017/db_clubpetro',
      entities: [Card],
      synchronize: true,
      useUnifiedTopology: true,
    }),
    TypeOrmModule.forFeature([Card]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
