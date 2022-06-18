import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Taste, Temperament } from "../inputs/Enums";
import { Potion } from './Potion'

@Entity()
@ObjectType()
export class Herb extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  herbId: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  latin: string;

  @Field(() => String)
  @Column()
  ro: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  english: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tcm: string;

  @Field(() => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array", nullable: true })
  folk: string[];

  @Field(() => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array",nullable: true })
  images: string[];

  @Field((type) => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array",nullable: true })
  pickingTime: string[];

  @Field((type) => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array",nullable: true })
  partsUsed: string[];

  @Field((type) => Temperament, { nullable: true })
  @Column({ enum: Temperament, nullable: true })
  temperament: Temperament;

  @Field((type) => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array", nullable: true })
  quality: string[];

  @Field((type) => [Taste], { nullable: "itemsAndList" })
  @Column({ type: "simple-array", nullable: true, enum:Taste })
  taste: Taste[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  category: string;

  @Field((type) => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array", nullable: true })
  meridians: string[];

  @Field((type) => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array", nullable: true })
  skills: string[];

  @Field((type) => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array", nullable: true })
  enemies: string[];

  @Field((type) => [String], { nullable: "itemsAndList" })
  @Column({ type: "simple-array", nullable: true })
  dontUse: string[];

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  available: boolean;

  @Field(() => [Potion], { nullable: "itemsAndList" })
  @ManyToMany(type => Potion, potion => potion.herbs)
  potions: Promise<Potion[]>;
}

