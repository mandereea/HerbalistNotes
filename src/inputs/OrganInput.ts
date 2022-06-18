import { InputType, Field } from "type-graphql";

@InputType()
export class OrganInput {
  @Field()
  viscera: string;

  @Field({ nullable: true })
  partner?: string;

  @Field({ nullable: true })
  senseOrgan: string;

  @Field({ nullable: true })
  tissue: string;
}

@InputType()
export class OrganUpdateInput {
  @Field({ nullable: true })
  viscera: string;

  @Field({ nullable: true })
  partner: string;

  @Field({ nullable: true })
  senseOrgan: string;

  @Field({ nullable: true })
  tissue: string;
}
