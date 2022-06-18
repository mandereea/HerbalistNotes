import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Taste, TimeOfDay } from "../inputs/Enums";

@Entity()
@ObjectType()
export class Element extends BaseEntity {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  name: string

  @Field(() => String, { nullable: true })
  @Column( { nullable: true })
  season: string
  
   @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  environmentalFactor: string

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  direction: string

  @Field(() => TimeOfDay, { nullable: true })
  @Column({ nullable: true, enum: TimeOfDay })
  time: TimeOfDay

  @Field(() => Taste, { nullable: true })
  @Column({ nullable: true })
  taste: Taste

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  color: string

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  sound: string

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  organ: string

  @Field((type) => String, { nullable: true })
  @Column({ nullable: true })
  emotion: string

}
