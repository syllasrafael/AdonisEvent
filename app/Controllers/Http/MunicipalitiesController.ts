import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Municipality from 'App/Models/Municipality'

export default class MunicipalitiesController {
    public async index() {

        const municipalities = await Municipality.all()

        return municipalities
       
    }

    public async show(ctx:  HttpContextContract) {
        const id = ctx.request.param('id')
        const municipalities = await Municipality.findOrFail(id)

        return municipalities
       
    }

    public async store(ctx:  HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                description: schema.string(),
                province_id: schema.number()
            })
        })

        const municipalities = await Municipality.create(payload)
        return municipalities
       
        
       
    }
    public async update(ctx:  HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                description: schema.string(),
                province_id: schema.number()
            })
        })
        const id = ctx.request.param('id')
        const municipality = await Municipality.findOrFail(id)
        municipality.merge(payload)
        municipality.save()
        return municipality
       
    }

    public async destroy(ctx:  HttpContextContract) {
        const id = ctx.request.param('id')
        const municipality = await Municipality.findOrFail(id)
        municipality.delete()
        return null
       
    }

}
