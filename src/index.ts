import "reflect-metadata";
import {  DataSource, getConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { ApolloServerLoaderPlugin } from "type-graphql-dataloader";

import { buildSchema } from "type-graphql";
import { Organ } from "./models/Organ";
import { OrganResolver } from "./resolvers/OrganResolver";
import { Herb } from "./models/Herb";
import { HerbResolver} from "./resolvers/HerbsResolver";
import { Potion } from "./models/Potion";
import { PotionResolver} from "./resolvers/PotionResolver";
import { Element } from "./models/Element";
import { ElementResolver } from "./resolvers/ElementResolver";
import { Ingredient } from "./models/Ingredient";
import { IngredientResolver } from "./resolvers/IngredientResolver";


async function main() {

  let dataSource = new DataSource({
    type: 'sqlite',
    name: 'HerbsDb',
    database: "../db.sqlite3",
    entities: [Organ, Herb, Element, Potion, Ingredient, "./models/*.ts"],
    synchronize: true
});
   const connection = await dataSource.initialize()

  const schema = await buildSchema({
    resolvers: [OrganResolver, HerbResolver, ElementResolver, PotionResolver, IngredientResolver]
  })

  console.log('is connection init?', connection.isInitialized)
  
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerLoaderPlugin({
        typeormGetConnection: () => dataSource,  // for use with TypeORM
      }),
    ],
  })

  await server.listen(4000)
  console.log("Server has started at http://localhost:4000")
}

main()
