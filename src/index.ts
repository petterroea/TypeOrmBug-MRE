import {createConnections} from "typeorm";

async function doDbExample() {
	const connections = await createConnections([{
	    name: "db1Connection",
	    type: "postgres",
	    host: "localhost",
	    port: 3306,
	    username: "test",
	    password: "testPassword",
	    database: "test",
	    entities: [__dirname + "/entity/*{.js,.ts}"],
	    synchronize: true
	}, {
	    name: "db2Connection",
	    type: "postgres",
	    host: "localhost",
	    port: 3306,
	    username: "test",
	    password: "testPassword",
	    database: "database2",
	    entities: [__dirname + "/entity/*{.js,.ts}"],
	    synchronize: true
	}]);
}
console.log("Hello, world!")


doDbExample()