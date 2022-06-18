import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Organ } from "../models/Organ";
import { OrganInput, OrganUpdateInput } from "../inputs/OrganInput";

@Resolver()
export class OrganResolver {
  @Query(() => [Organ])
   async organs() {
     const organ = await Organ.find()
    return organ;
  }

  @Query(() => Organ)
  async organ(@Arg("id") id: string) {
    return await Organ.findOne({ where: { id } });
  }

  @Mutation(() => Organ)
  async createOrgan(@Arg("data") data: OrganInput) {
    if(!data){
      return;
    }
    
    const organ = Organ.create({...data});
    await organ.save();
    return organ;
  }

  @Mutation(() => Organ)
  async editOrgan(@Arg("id") id: string, @Arg("data") data: OrganUpdateInput) {
    console.log({data})
    if(!data){
      return;
    }

    const organ = await Organ.findOne({ where : { id }});

    Object.assign(organ, data)
    await organ?.save();
    return organ;
  }

  @Mutation(() => Boolean)
  async deleteOrgan(@Arg("id") id: string) {
    const organ = await Organ.findOne({ where : { id }});
    if(!organ){
      console.log("didn't find ")
      return;
    }
    await organ?.remove()
    return true;
  }
}
