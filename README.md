|||
|---|---|
|Node|v18.2.0|
| framework|express|

# PostGIS & Express & React

Typescript porting of the great S2 Geometry library from Google
https://github.com/vekexasia/nodes2-ts

aboutPostGIS table with Prisma ORM.. not sure about the details yet
https://freddydumont.com/blog/prisma-postgis

not sure how to see PostGIS filed in Prisma Studio.  You can check it in PGAdmin. 

#### How to set up knex with PostGIS and knex-postgis
https://www.codedaily.io/tutorials/Query-GPS-Coordinates-within-a-Radius-using-KnexJS-Postgres-and-the-PostGIS-Extension


## Knex
```
knex migrate:make <name>: Create a new migration file with the given name.
knex migrate:latest: Run all pending migrations.
knex migrate:rollback: Rollback the last batch of migrations.
knex migrate:up <name>: Run the specified migration.
knex migrate:down <name>: Rollback the specified migration.
knex migrate:status: Show the status of all migrations.
```

## Prisma ORM !!! oops.. I switched to Knex  But I will keep it in case
```
npx prisma init: Initializes a new Prisma project.
npx prisma migrate dev: Runs migrations in development mode.
npx prisma migrate deploy: Deploys migrations to the production environment.
npx prisma introspect: Retrieves the schema from the database and maps it to the Prisma model.
npx prisma generate: Generates TypeScript type definitions and Prisma Client from the Prisma model.
npx prisma studio: Launches Prisma Studio, a browser-based GUI tool.
npx prisma format: Formats the Prisma schema.
```
## Terraform 

```
terraform init: Initializes a Terraform project.
terraform plan: Creates a Terraform execution plan to show which resources will be created, modified, or deleted.
terraform apply: Modifies or creates the AWS infrastructure based on the Terraform execution plan.
terraform destroy: Deletes the AWS resources created by Terraform.
terraform validate: Validates the Terraform code.
terraform fmt: Formats the Terraform code.
terraform state list: Lists the resources saved in the Terraform state file.
```

## PG admin

### 🚨Note: When connecting to the database, specify the container name instead of localhost.


docker volume ls and then docker volume rm <volume-name>
