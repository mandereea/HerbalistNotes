import {
  Resolver,
  Query,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { Equal, In } from "typeorm";
import { Herb } from "../models/Herb";
import { Potion } from "../models/Potion";
import { SortInput } from "./../inputs/HerbInput";
import { HerbInput, HerbUpdateInput } from "./../inputs/HerbInput";

@Resolver((of) => Herb)
export class HerbResolver {
  @Query(() => [Herb])
  async herbs() {
    const herb = await Herb.find();
    console.log(herb);
    return herb;
  }

  @Query(() => Herb)
  async herbByName(@Arg("name") name: string) {
    return await Herb.findOne({
      where: [
        { latin: name },
        { ro: name },
        { english: name },
        { tcm: name },
        { folk: name },
      ],
    });
  }
// I want to be able to sort based on Temperament, Taste
// TODO properly map the enums
  @Query(() => [Herb])
  async sortedHerbs(@Arg("rule") { field, sortOrder }: SortInput) {
    const herb = await Herb.find({
      //  take: 2,
      order: {
        [field]: sortOrder === "descend" ? "DESC" : "ASC",
      },
    });
    return herb;
  }
// I want to be able to do all kinds of filtering 
//so far I am able to filter simple string type fields
  @Query(() => [Herb])
  async filteredHerbs(@Arg("rule") { field, filterValue }: SortInput) {
    const herb = await Herb.find({
      //  take: 3,
      where: {
        [field]: Equal(filterValue),
      },
    });
    return herb;
  }

  @Mutation(() => Herb)
  async createHerb(@Arg("herb") herbInput: HerbInput) {
    if (!herbInput) {
      return;
    }
    const herb = Herb.create({ ...herbInput });
    await herb.save();
    return herb;
  }

  @Mutation(() => Herb)
  async editHerb(
    @Arg("herbId") herbId: string,
    @Arg("data") data: HerbUpdateInput
  ) {
    if (!data) {
      return;
    }
    const herb = await Herb.findOne({ where: { herbId } });
    Object.assign(herb, data);
    await herb?.save();
    return herb;
  }

  @Mutation(() => Boolean)
  async deleteHerb(@Arg("herbId") herbId: string) {
    const herb = await Herb.findOne({ where: { herbId } });
    if (!herb) {
      console.log("didn't find herb");
      return;
    }
    await herb?.remove();
    return true;
  }

  @FieldResolver()
  async potions(@Root() herb: Herb) {
    const potionsList = await Potion.find({
      where: { herbs: In([herb]) },
    });
    return potionsList;
  }
}
