import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Card } from './card.entity';


@Controller('cards')
export class CardsController {
  constructor(
    @InjectRepository(Card)
    private readonly cardsRepository: MongoRepository<Card>){}
  
    @Get()
    async getCards(): Promise<Card[]> {
      return await this.cardsRepository.find();
    }

}
