export type TUserResponse = {
  _id: string
  name: string
  email: string
  phone: string
  cpf: string
  address: string
  _v: number
}

export type TUserData = Omit<TUserResponse, '_id' | '_v'>
