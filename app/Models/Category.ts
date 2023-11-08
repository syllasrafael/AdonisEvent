import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Event from './Event'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @hasMany(()=> Event)
  public events: HasMany<typeof Event>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
