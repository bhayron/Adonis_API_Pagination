import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { username, name } = request.only(['name', 'username'])
    //console.log(username, name)

    const user = await User.create({
      username,
      name,
    })
    return user
  }

  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('per_page', 5)

    const users = await User.query().orderBy('id', 'desc').paginate(page, perPage)

    return response.json(users)

    //const all = await User.all()
    //return all
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return user
  }

  public async update({ request, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const data = request.only(['name', 'username'])

    user.merge(data)
    await user.save()

    return user
  }

  public async delete({ params }: HttpContextContract) {
    const post = await User.findOrFail(params.id)

    await post.delete()
  }
}
