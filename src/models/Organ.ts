import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Organ extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String, { nullable: true } )
  @Column()
  viscera: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  partner: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  senseOrgan: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tissue: string;
}