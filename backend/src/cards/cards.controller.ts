import { Controller, Get, Param, NotFoundException, Post, Body, BadRequestException, Patch, HttpCode, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID  } from 'mongodb';
import { Card } from './card.entity';


@Controller('cards')
export class CardsController {
  constructor(
    @InjectRepository(Card)
    private readonly cardsRepository: MongoRepository<Card>){}
  
    @Get()
    async getCards(): Promise<Card[]> {
      const countries = await this.cardsRepository.find();
      
      const compare = ( a:Card, b:Card ) => {
        if ( a.meta < b.meta ){
          return -1;
        }
        if ( a.meta > b.meta ){
          return 1;
        }
        return 0;
      }

      const sorted = countries.sort(compare);
      console.log(sorted)

      return countries
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
    async createCard(@Body() card: Partial<Card>): Promise<Card> {
      const checkLocation = await this.cardsRepository.find({ where: { country: card.country, location: (card.location) } });
      if (checkLocation.length) {
        throw new BadRequestException(`Não é possivel cadastrar essa ${card.location} pois já existe`);
      }
      if (!card || !card.country || !card.urlFlag || !card.location || !card.meta) {
        throw new BadRequestException(`A card must be created only country, urlFlag, location and meta date`);
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
    const checkLocation = await this.cardsRepository.find({ where: { country: card.country, location: card.location } });
    if (checkLocation.length) {
    throw new BadRequestException(`Não é atualizar a ${card.location} pois ela já existe para ${card.country}`);
    }
      card.updatedAt = new Date()
      await this.cardsRepository.update(id, card);
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteCard(@Param('id') id): Promise<void> {
      const exists = ObjectID.isValid(id) && await this.cardsRepository.findOne(id);
        if (!exists) {
      throw new NotFoundException();
    }
      await this.cardsRepository.delete(id);
    }
}
