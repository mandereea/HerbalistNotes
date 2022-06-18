import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Ingredient } from "../models/Ingredient";
import { OrganInput, OrganUpdateInput } from "../inputs/OrganInput";

@Resolver()
export class IngredientResolver {
  @Query(() => [Ingredient])
   async ingredients() {
    const ingredient = await Ingredient.find()
    return ingredient;
  }
}