import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Organ } from "../models/Organ";
import { OrganInput, OrganUpdateInput } from "../inputs/OrganInput";
import { Element } from "../models/Element";
import { ElementInput, ElementUpdateInput } from "../inputs/ElementInput";

@Resolver()
export class ElementResolver {
  @Query(() => [Element])
   async elements() {
     const element = await Element.find()
    return element;
  }

  @Query(() => Element)
  async organ(@Arg("id") id: string) {
    return await Element.findOne({ where: { id } });
  }

  @Mutation(() => Element)
  async createElement(@Arg("data") data: ElementInput) {
    if(!data){
      return;
    }
    
    const element = Element.create({...data});
    await element.save();
    return element;
  }

  @Mutation(() => Element)
  async editElement(@Arg("id") id: string, @Arg("data") data: ElementUpdateInput) {
    console.log({data})
    if(!data){
      return;
    }

    const element = await Element.findOne({ where : { id }});

    Object.assign(element, data)
    await element?.save();
    return element;
  }

  @Mutation(() => Boolean)
  async deleteElement(@Arg("id") id: string) {
    const element = await Element.findOne({ where : { id }});
    if(!element){
      console.log("didn't find ")
      return;
    }
    await element?.remove()
    return true;
  }
}
