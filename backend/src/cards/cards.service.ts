import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { Card } from './cards.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Card)
    private readonly cardsRepository: Repository<Card>,
  ) {}

  async findAll(): Promise<Card[]> {
    const countries = await this.cardsRepository.find({
      order: { country: 'ASC' },
    });

    return countries.sort((a: any, b: any) => {
      a = a.meta.split('/');
      b = b.meta.split('/');
      return (
        new Date(a[1], a[0], 1).getTime() - new Date(b[1], b[0], 1).getTime()
      );
    });
  }

  async getCard(@Param('id') id): Promise<Card> {
    const card =
      ObjectID.isValid(id) && (await this.cardsRepository.findOne(id));
    if (!card) {
      throw new NotFoundException();
    }
    return card;
  }

  async create(card: Card): Promise<Card> {
    const checkLocation = await this.cardsRepository.find({
      where: { country: card.country, location: card.location },
    });
    if (checkLocation.length) {
      throw new BadRequestException(
        `Não é possivel cadastrar ${card.location} pois já existe ${card.country}`,
      );
    }
    if (
      !card ||
      !card.country ||
      !card.urlFlag ||
      !card.location ||
      !card.meta
    ) {
      throw new BadRequestException(
        'Um país deve ser criado apenas com país, urlFlag, local e meta data',
      );
    }
    return await this.cardsRepository.save(card);
  }

  async update(@Param('id') id, @Body() card: Partial<Card>): Promise<void> {
    const checkLocation = await this.cardsRepository.find({
      where: { country: card.country, location: card.location },
    });
    if (checkLocation.length) {
      throw new BadRequestException(
        `Não é atualizar a ${card.location} pois ela já existe para ${card.country}`,
      );
    }
    card.updatedAt = new Date();
    await this.cardsRepository.update(id, card);
  }

  async delete(@Param('id') id): Promise<void> {
    const exists =
      ObjectID.isValid(id) && (await this.cardsRepository.findOne(id));
    if (!exists) {
      throw new NotFoundException();
    }
    await this.cardsRepository.delete(id);
  }
}
