import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { Card } from '../cards.entity';
import { CardsService } from '../cards.service';

@Controller('cards')
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  index(): Promise<Card[]> {
    return this.cardsService.findAll();
  }

  @Get(':id')
  async getCard(@Param('id') id): Promise<Card> {
    return this.cardsService.getCard(id);
  }

  @Post()
  async create(@Body() cardData: Card): Promise<any> {
    return this.cardsService.create(cardData);
  }

  @Patch(':id')
  @HttpCode(204)
  async update(
    @Param('id') id,
    @Body() cardData: Partial<Card>,
  ): Promise<void> {
    return this.cardsService.update(id, cardData);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id): Promise<any> {
    return this.cardsService.delete(id);
  }
}
