import { Controller, Get, Param, NotFoundException, Post, Body, BadRequestException, Patch, HttpCode } from '@nestjs/common';
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

    @Get(':id')
    async getCard(@Param('id') id): Promise<Card> {
      const card = ObjectID.isValid(id) && await this.cardsRepository.findOne(id);
      if (!card) {
      throw new NotFoundException();
      }
    return card;
    }

    @Post()
    async createPet(@Body() card: Partial<Card>): Promise<Card> {
      if (!card || !card.location || !card.meta) {
      throw new BadRequestException(`A card must be changed only location and meta data`);
      }
      return await this.cardsRepository.save(new Card(card));
    }

    @Patch(':id')
    @HttpCode(204)
    async updateCard(@Param('id') id, @Body() card: Partial<Card>): Promise<void> {
      const exists = ObjectID.isValid(id) && await this.cardsRepository.findOne(id);
        if (!exists) {
      throw new NotFoundException();
    }
      await this.cardsRepository.update(id, card);
    }
}
