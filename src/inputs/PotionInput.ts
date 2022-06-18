
import { InputType, Field} from "type-graphql";
import { IngredientInput, IngredientUpdateInput } from './IngredientInput';

@InputType()
export class PotionInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  use: string[];

  @Field(() => String, { nullable: true })
  bestSeason: string;

  @Field(() => String, { nullable: true })
  potionType: string;

  @Field(() => [IngredientInput])
  ingredients: IngredientInput[];

  @Field((type) => String, { nullable: true })
  methodDescription: string;

  @Field((type) => String, { nullable: true })
  time: string;

  @Field(() => Boolean, { nullable: true })
  available: boolean;
}

@InputType()
export class PotionUpdateInput {
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  use: string[];

  @Field(() => String, { nullable: true })
  bestSeason: string;

  @Field(() => String, { nullable: true })
  potionType: string;

  @Field(() => [IngredientUpdateInput], { nullable: true })
  ingredients: IngredientUpdateInput[];

  @Field((type) => String, { nullable: true })
  methodDescription: string;

  @Field((type) => String, { nullable: true })
  time: string;

  @Field(() => Boolean, { nullable: true })
  available: boolean;
}