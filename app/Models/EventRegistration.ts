import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Event from './Event'

export default class EventRegistration extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public attendance: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=>Event)
  public event: BelongsTo<typeof Event>

  @belongsTo(()=>User)
  public user: BelongsTo<typeof User>


}
