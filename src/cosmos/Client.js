// This code shows the implementation of Azure CosmosDb using ReactJS
// All credit belong to the author of the code as I am not the original author
// For more information, visit https://www.npmjs.com/package/@azure/cosmos

// This line imports the necessary resources required for all the functionality
import { CosmosClient } from "@azure/cosmos"

// Declaring the environment variables

// This is your Azure CosmosDB account URI link
const endpoint = "https://purchaseorderitems.documents.azure.com:443/";

// This is the primary key to your Azure CosmosDB account
const key = "UEyhDWw0UF9CweujkD8xlhtnhWpucIJHiElDrLa47gL77EwBfCMueYfeDcwiZPwvB3VyX6uignNBACDbPg1ohQ==";

// Instantiating a CosmosClient object
const client = new CosmosClient({ endpoint, key });

export const AzureCosmos = async() => {
    // This piece of code creates a database on Azure CosmosDB

    const { database } = await client.databases.createIfNotExists({ id: "exampleDB" });
    console.log(database.id);

    // End of code

    // This piece of code creates a container on Azure CosmosDB

    // const { container } = await database.containers.createIfNotExists({ id: "Test Database" });
    // console.log(container.id);

    // End of code

    // This piece of code inserts items into Azure CosmosDB

    // const cities = [
    //     { id: "1", name: "Olympia", state: "WA", isCapital: true },
    //     { id: "2", name: "Redmond", state: "WA", isCapital: false },
    //     { id: "3", name: "Chicago", state: "IL", isCapital: false }
    //   ];

    //   for (const city of cities) {
    //     await container.items.create(city);
    //   }

    // End of code

    // This piece of code reads an item from  Azure CosmosDB

    // await container.item("1").read();

    // End of code

    // This piece of code deletes first item returned on Azure CosmosDB

    // await container.item("1").delete();

    // End of code

    // This piece of code queries the DB on Azure CosmosDB

    // const { resources } = await container.items
    // .query("SELECT * from c WHERE c.isCapitol = true")
    // .fetchAll();

    // for (const city of resources) {
    //     console.log(`${city.name}, ${city.state} is a capital `);
    // }

    // End of code

    // This piece of code performs parameterized queries on Azure CosmosDB

    // const { data } = await container.items
    // .query({
    //     query: "SELECT * from c WHERE c.isCapital = @isCapital",
    //     parameters: [{ name: "@isCapitol", value: true }]
    // })
    // .fetchAll();
    
    // for (const city of data) {
    // console.log(`${city.name}, ${city.state} is a capital `);
    // }

    // End of code
}

