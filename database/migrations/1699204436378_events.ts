import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 255).notNullable()
      table.text('description').notNullable()
      table.string('address', 255).notNullable()
      table.string('lat', 255).notNullable()
      table.string('long', 255).notNullable()
      table.string('cover', 255).notNullable()
      table.integer('min_Age').notNullable()
    


      table.integer('user_id').unsigned().notNullable().references('users.id').onDelete('CASCADE')
      table.integer('category_id').unsigned().notNullable().references('categories.id').onDelete('CASCADE')
      table.integer('municipality_id').unsigned().notNullable().references('municipalities.id').onDelete('CASCADE')


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
