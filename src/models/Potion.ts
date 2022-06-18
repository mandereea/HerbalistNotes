import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  Any,
} from "typeorm";
import { TypeormLoader } from "type-graphql-dataloader";
import { ObjectType, Field, ID } from "type-graphql";
import { Herb } from "./Herb";
import { Ingredient } from "./Ingredient";

@Entity()
@ObjectType()
export class Potion extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ type: "simple-array", nullable: true })
  use: string[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  bestSeason: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  potionType: string;

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  methodDescription: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: "simple-array", nullable: true })
  time: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  available: boolean;

  @Field((type) => [Ingredient], { nullable: true })
  @OneToMany(() => Ingredient, (ingredient) => ingredient.potion, {
    cascade: true,
    eager: true,
  })
  @TypeormLoader()
  ingredients: Ingredient[];

  @Field(() =>[ Herb],  { nullable: "itemsAndList" } )
  @ManyToMany((type) => Herb, (herb) => herb.potions, {
    eager: true
  })
  @JoinTable()
  herbs: Promise<Herb[]>;
}
