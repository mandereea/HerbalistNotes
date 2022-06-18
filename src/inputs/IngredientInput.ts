import { InputType, Field } from "type-graphql";

@InputType()
export class IngredientInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  ratio: string;

 @Field(() => String, { nullable: true })
 quantity: string;
// newly added field, planning to look through all potion's ingredients
// and if they are herb to look for herb in Herb records, return Herb || 'not on record'
 @Field(() => Boolean, { nullable: true })
 isHerb: boolean;
}

@InputType()
export class IngredientUpdateInput {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  ratio: string;

 @Field(() => String, { nullable: true })
 quantity: string;

 @Field(() => Boolean, { nullable: true })
 isHerb: boolean;
}