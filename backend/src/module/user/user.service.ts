import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { User, UserDocument } from './schema/user.schema'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers() {
    const users = await this.userModel.find()

    if (!users) {
      throw new BadRequestException('Solicitação inválida')
    }

    return users
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id)

    if (!user) {
      throw new BadRequestException('Solicitação inválida')
    }

    return user
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userModel.create(createUserDto)
    } catch (error) {
      if (error.keyPattern) {
        const errors = Object.keys(error.keyPattern)
        throw new BadRequestException(
          errors.includes('email')
            ? 'Esse email já está sendo usado'
            : errors.includes('cpf')
            ? 'Esse cpf já está sendo usado'
            : errors.includes('name')
            ? 'Esse nome já está sendo usado'
            : errors.includes('phone')
            ? 'Esse número já está sendo usado'
            : 'Tente novamente mais tarde!',
        )
      } else {
        throw new BadRequestException(error)
      }
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    })

    if (!user) {
      throw new BadRequestException('Solicitação inválida')
    }

    return user
  }

  async deleteUser(id: string) {
    const user = await this.userModel.findByIdAndDelete(id)
    if (!user) {
      throw new BadRequestException('Solicitação inválida')
    }

    return user
  }
}
