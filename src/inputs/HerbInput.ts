import { InputType, Field } from "type-graphql";
import { Taste, Temperament } from "./Enums"

@InputType()
export class SortInput {
  @Field()
  field: string;

  @Field( { nullable: true })
  sortOrder?: string;

  @Field( { nullable: true })
  filterValue?: string;
}

@InputType()
export class HerbInput {
  @Field(() => String, { nullable: true })
  latin: string;

  @Field(() => String)
  ro: string;

  @Field(() => String, { nullable: true })
  english: string;

  @Field(() => String, { nullable: true })
  tcm: string;

  @Field(() => [String ], { nullable: "itemsAndList" })
  folk:string[];

  @Field(() => [String], { nullable: true })
  images: string[];

  @Field((type) => [String], { nullable: true })
  pickingTime: string[];

  @Field((type) => [String], { nullable: true })
  partsUsed: string[];

  @Field((type) => Temperament, { nullable: true })
  temperament: Temperament;

  @Field((type) =>[ String], { nullable: true })
  quality: string[];

  @Field((type) => [Taste], { nullable: true })
  taste: Taste[];

  @Field(() => String, { nullable: true })
  category: string;

  @Field((type) => [String], { nullable: true })
  meridians: string[];

  @Field((type) => [String], { nullable: true })
  skills?: string[];

  @Field((type) => [String], { nullable: true })
  enemies?: string[];

  @Field((type) =>[ String], { nullable: true })
  dontUse?: string[];

  @Field(() => Boolean, { nullable: true })
  available?: boolean;
}

@InputType()
export class HerbUpdateInput {
  @Field(() => String, { nullable: true })
  latin: string;

  @Field(() => String, { nullable: true })
  ro: string;

  @Field(() => String, { nullable: true })
  english: string;

  @Field(() => String, { nullable: true })
  tcm?: string;

  @Field(() => [String], { nullable: true })
  folk: string[];

  @Field(() => [String], { nullable: true })
  images: string[];

  @Field((type) => [String], { nullable: true })
  pickingTime: string[];

  @Field((type) => [String], { nullable: true })
  partsUsed: string[];

  @Field((type) => Temperament, { nullable: true })
  temperament: Temperament;

  @Field((type) =>[ String], { nullable: true })
  quality: string[];

  @Field((type) => [Taste], { nullable: true })
  taste: Taste[];

  @Field(() => String, { nullable: true })
  category: string;

  @Field((type) => [String], { nullable: true })
  meridians: string[];

  @Field((type) => [String], { nullable: true })
  skills?: string[];

  @Field((type) => [String], { nullable: true })
  enemies?: string[];

  @Field((type) =>[ String], { nullable: true })
  dontUse?: string[];

  @Field(() => Boolean, { nullable: true })
  available?: boolean;

}
