import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { TypeormLoader } from "type-graphql-dataloader";
import { ObjectType, Field, ID } from "type-graphql";
import { Potion } from "./Potion";

@Entity()
@ObjectType()
export class Ingredient extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  ratio: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  quantity: string;

  @Field(() => Boolean, { nullable: true })
  @Column({ nullable: true })
  isHerb: boolean;

  @Field((type) => Potion)
  @ManyToOne((type) => Potion, potion => potion.ingredients)
  @TypeormLoader()
  potion: Potion;

}