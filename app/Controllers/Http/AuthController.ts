import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'


export default class AuthController {
    public async login(ctx: HttpContextContract) {

        try {

            const email = ctx.request.input('email')
            const password = ctx.request.input('password')
            const token = await ctx.auth.use('api').attempt(email, password)
            return token

        } catch (erro) {
            return ctx.response.unauthorized('Senha invalida')
        }

    }

    public async registration(ctx: HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                name: schema.string(),
                email: schema.string([
                    rules.email()
                ]),
                password: schema.string([
                    rules.confirmed(),
                    rules.minLength(6)
                ]),
                birth_date: schema.date({
                    format: 'yyyy-MM-dd'
                }
                )
            })
        })
        const user = User.create(payload)
        return user
    }

    public async user(ctx: HttpContextContract) {
        return ctx.auth.use('api').user

    }

    public async logout(ctx: HttpContextContract) {
        await ctx.auth.use('api').revoke()
        return {
          revoked: true
        }
    }

    public async update(ctx: HttpContextContract) {
        const payload = await ctx.request.validate({
            schema: schema.create({
                name: schema.string(),
                email: schema.string([
                    rules.email()
                ]),
                birth_date: schema.date({
                    format: 'yyyy-MM-dd'
                })
            })
        })
        const user = ctx.auth.user!;
        user.merge(payload)
        user.save()
        return
    }

}