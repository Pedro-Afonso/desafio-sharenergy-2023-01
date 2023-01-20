import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://PedroAfonso:HDsMBXvYwOu4A3fP@cluster0.3vkv69n.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class MongodbModule {}
