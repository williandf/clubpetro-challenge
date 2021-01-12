import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('cards')
  export class Card {
    @ObjectIdColumn() id: ObjectID;
    @Column() country: string;
    @Column() urlFlag: string;
    @Column() location: string;
    @Column() meta: string;
    @CreateDateColumn() createdAt: Date;
    @CreateDateColumn() updatedAt: Date;

    constructor(card?: Partial<Card>) {
      Object.assign(this, card);
    }
  }