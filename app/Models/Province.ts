import { DateTime } from 'luxon'
import { BaseModel,  HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Municipality from './Municipality'

export default class Province extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string
  
  @column()
  public provinceId: number


  @hasMany(()=> Municipality)
  public municipalities: HasMany<typeof Municipality>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
