# TypeORM bug: Minimal reproducable example

This repo is made to provide a minimal reproducable example of a potential bug in TypeORM in which the `database` field of `Entity` is not respected.

## Notes on security

This example utilizes an adminer docker container which is exposed on port `3739`. This may be a security issue.

## Running it

This example was set up with Docker. To run it, you can simply `cd` to the `docker`-folder, and run `docker-compose up`.

## The possible bug

The two entities in `src/entitiy` are configured to exist in two different databases: `test` and `database2` using the `database` field on the `Entity` decorator.

When everything has started, you can log in to adminer with the following details:

 * Server: `db`
 * Username: `test`
 * Password: `testPassword`
 * Database: (empty)

By exploring the `test` and `database2` databases, you can observe that both entities are defined in both databases.

The code that sets up the connections is located in the `src/index.ts` file.