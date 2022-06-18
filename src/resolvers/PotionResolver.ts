import {
  Resolver,
  Query,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { Potion } from "../models/Potion";
import { Herb } from "../models/Herb";
import { PotionInput, PotionUpdateInput } from "./../inputs/PotionInput";
import { Ingredient } from "../models/Ingredient";

@Resolver((of) => Potion)
export class PotionResolver {
  @Query(() => [Potion])
  async potions() {
    const potion = await Potion.find({
      relations: ["herbs"],
    });
    if (!potion) {
      throw new Error("no potions");
    }
    return potion;
  }

  @Query(() => Potion)
  async potionById(@Arg("id") id: string) {
    const potion = await Potion.findOne({
      where: { id },
    });
    return potion;
  }

  @Mutation(() => Potion)
  async createPotion(@Arg("potion") potionInput: PotionInput) {
    if (!potionInput) {
      return;
    }

    if (potionInput) {
      const potion = Potion.create({ ...potionInput });
      await potion.save();
      return potion;
    }
  }
  @Mutation(() => Potion)
  async editPotion(
    @Arg("id") id: string,
    @Arg("data") data: PotionUpdateInput
  ) {
    if (!data) {
      return;
    }

    const potion = await Potion.findOne({ where: { id } });

    Object.assign(potion, data);
    await potion?.save();
    return potion;
  }

  @Mutation(() => Boolean)
  async deletePotion(@Arg("id") id: string) {
    const potion = await Potion.findOne({ where: { id } });

    if (!potion) {
      console.log("didn't find potion");
      return;
    }
    await potion?.remove();
    return true;
  }

  @FieldResolver()
  async herbs(@Root() potion: Potion) {
    const herbsList = potion.ingredients.map(async (ingredient: Ingredient) => {
      const name =  ingredient.name ;
      const herb: Herb | null = await Herb.findOne({
        where: [
          { latin: name },
          { ro: name },
          { english: name },
          { tcm: name },
          { folk: name },
        ],
      });
      // I would like to have different response for herbs vs other type of ingredient 
      // to be able to render 'not on record' for ingredients which are herbs but not on record yet
      //it doesn't work, it's a reminder to find another solution
      return herb ? herb : ingredient.isHerb ? undefined : null;
    });
    return herbsList;
  }
}
