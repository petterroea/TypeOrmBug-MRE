import {createConnections} from "typeorm";

async function doDbExample() {
	const connections = await createConnections([{
	    name: "db1Connection",
	    type: "postgres",
	    host: "db",
	    port: 5432,
	    username: "test",
	    password: "testPassword",
	    database: "test",
	    entities: [__dirname + "/entity/*{.js,.ts}"],
	    synchronize: true
	}]);

	console.log("Created connections")
}
console.log("Hello, world!")


doDbExample()