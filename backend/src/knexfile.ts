import { config } from "dotenv";
import { Knex } from "knex";

interface KnexConfig {
  [key: string]: Knex.Config
}

const configs: KnexConfig = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'mydb',
      user: 'user',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  staging: {
    client: 'postgresql',
    connection: {
      database: 'mydb',
      user: 'user',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

export default configs