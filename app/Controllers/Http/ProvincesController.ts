import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import Province from "App/Models/Province"

export default class ProvincesController {
    public async index() {

        const provinces = await Province.all()

        return provinces
       
    }

    public async show(ctx:  HttpContextContract) {
        const id = ctx.request.param('id')
        const provinces = await Province.findOrFail(id)

        return provinces
       
    }

    public async store(ctx:  HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                description: schema.string(),
            })
        })
        const provinces = await Province.create(payload)
        return provinces
       
       
    }
    public async update(ctx:  HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                description: schema.string(),
            })
        })
        
        const id = ctx.request.param('id')
        const province = await Province.findOrFail(id)
        province.merge(payload)
        province.save()
        return province
       
    }

    public async destroy(ctx:  HttpContextContract) {
        
        const id = ctx.request.param('id')
        const province = (await Province.findOrFail(id))
        province.delete()
        return null
       
    }

}
