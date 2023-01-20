import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  name: string

  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
  })
  email: string

  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
  })
  phone: string

  @Prop({
    type: String,
    required: true,
    trim: true,
  })
  address: string

  @Prop({
    type: String,
    required: true,
    unique: true,
    trim: true,
  })
  cpf: string
}

export const UserSchema = SchemaFactory.createForClass(User)
