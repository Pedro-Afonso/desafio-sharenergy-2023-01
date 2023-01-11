import { IRandomUserResponse } from '../../interfaces/random-user'

export const randomUserStub = (): IRandomUserResponse => {
  return {
    results: [
      {
        gender: 'male',
        name: { title: 'Mr', first: 'Liam', last: 'Wright' },
        location: {
          street: { number: 1522, name: 'George Street' },
          city: 'Whanganui',
          state: 'Tasman',
          country: 'New Zealand',
          postcode: 61041,
          coordinates: { latitude: '51.9716', longitude: '-120.5489' },
          timezone: {
            offset: '+10:00',
            description: 'Eastern Australia, Guam, Vladivostok',
          },
        },
        email: 'liam.wright@example.com',
        login: {
          uuid: 'afe24fc9-3d71-45ce-8065-dd45d605bbdc',
          username: 'happyfrog846',
          password: '49ers',
          salt: 'o2CfwU6X',
          md5: '575de13c9873790fe45240584068ba2a',
          sha1: '3f52320ffc53cc48b6f90e076238a1602b33ad59',
          sha256:
            '05691e47a1659c4aed41b1d287e836e46ebbae3f4134e96bd9f797ac2f9cb01d',
        },
        dob: { date: '1991-10-20T14:28:46.534Z', age: 31 },
        registered: { date: '2007-05-19T00:23:55.500Z', age: 15 },
        phone: '(840)-377-8778',
        cell: '(560)-559-3859',
        id: { name: '', value: null },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/35.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/35.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/35.jpg',
        },
        nat: 'NZ',
      },
    ],
    info: { seed: 'ff51c742f8544bd6', results: 1, page: 1, version: '1.4' },
  }
}
