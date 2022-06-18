import { InputType, Field } from "type-graphql";
import { Taste, TimeOfDay } from "./Enums";

@InputType()
export class ElementInput {
  @Field(() => String, { nullable: true })
  name: string

  @Field(() => String, { nullable: true })
  season: string
  
   @Field(() => String, { nullable: true })
  environmentalFactor: string

  @Field(() => String, { nullable: true })
 direction: string

  @Field(() => TimeOfDay, { nullable: true })
  time: TimeOfDay

  @Field(() => Taste, { nullable: true })
 taste: Taste

  @Field((type) => String, { nullable: true })
  color: string

  @Field((type) => String, { nullable: true })
  sound: string

  @Field((type) => String, { nullable: true })
  organ: string

  @Field((type) => String, { nullable: true })
  emotion: string
}

@InputType()
export class ElementUpdateInput {
  @Field(() => String, { nullable: true })
  name: string

  @Field(() => String, { nullable: true })
  season: string
  
   @Field(() => String, { nullable: true })
  environmentalFactor: string

  @Field(() => String, { nullable: true })
 direction: string

  @Field(() => TimeOfDay, { nullable: true })
  time: TimeOfDay

  @Field(() => Taste, { nullable: true })
 taste: Taste

  @Field((type) => String, { nullable: true })
  color: string

  @Field((type) => String, { nullable: true })
  sound: string

  @Field((type) => String, { nullable: true })
  organ: string

  @Field((type) => String, { nullable: true })
  emotion: string
}