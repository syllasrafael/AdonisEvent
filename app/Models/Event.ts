import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'
import Municipality from './Municipality'
import User from './User'
import EventRegistration from './EventRegistration'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @hasMany(()=> EventRegistration)
  public eventregistrations: HasMany<typeof EventRegistration>

  @belongsTo(()=>User)
  public user: BelongsTo<typeof User>

  @belongsTo(()=>Category)
  public categories: BelongsTo<typeof Category>

  @belongsTo(()=>Municipality)
  public municipalities: BelongsTo<typeof Municipality>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
