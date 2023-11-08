import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category'

export default class CategoreisController {
    public async index() {

        const categoreis= await Category.all()

        return categoreis
       
    }

    public async show(ctx:  HttpContextContract) {
        const id = ctx.request.param('id')
        const categoreis= await Category.findOrFail(id)

        return categoreis
       
    }

    public async store(ctx:  HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                description: schema.string(),
            })
        })

        const categoreis= await Category.create(payload)
        return categoreis
       
       
    }
    public async update(ctx:  HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                description: schema.string(),
            })
        })
        const id = ctx.request.param('id')
        const category = await Category.findOrFail(id)
        category.merge(payload)
        category.save()
        return category
       
    }

    public async destroy(ctx:  HttpContextContract) {
        const id = ctx.request.param('id')
        const category = await Category.findOrFail(id)
        category.delete()
        return null
       
    }

}
