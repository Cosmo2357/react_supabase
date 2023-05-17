import knex from 'knex'
import configs from '../../../knexfile'
const db = knex(configs.development)

export default {

  findAll: async (table: string, columns?: string[] ) => {
    if (columns){
      const result = await db(table).select(columns)
      return result
    } 
    const result = await db(table)
    return result
  },

  find: async (table: string, id: number, columns?: string[] ) => {
    if (columns){
      const result = await db(table).select(columns).where({ id })
      return result
    }
    const result = await db(table).where({ id })
    return result
  },

  add: async (table: string, item: any, columns?: string[] ) => {
    if (columns){
      const result = await db(table).insert(item, columns)
      return result
    }
    const result = await db(table).insert(item, ['id'])
    return result
  },

  update: async (table: string, id: number, item: any, columns?: string[] ) => {
    if (columns){
    const result = await db(table).where({ id }).update(item).returning(columns)
    return result
    }
    const result = await db(table).where({ id }).update(item).returning(['id'])
    return result
  },

  remove : async (table: string, id: number) => {
    const result = await db(table).where({ id }).del()
    return result
  }

}
