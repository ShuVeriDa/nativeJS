function icreaseAge(u: UserType) {
   u.age++
}

type UserType = {
   name: string
   age: number
   address: {title: string}
}

test('referense type test', () => {

   let user: UserType = {
      name: 'Dimych',
      age: 32,
      address: {
         title: 'Minsk'
      }
   }

   icreaseAge(user)

   expect(user.age).toBe(33)

   const superman = user
   superman.age = 1000
   expect(user.age).toBe(1000)
})

test('array referense test', () => {

   let users: UserType[] = [
      {
         name: 'Dimych',
         age: 32,
         address: {
            title: 'Minsk'
         }
      },
      {
         name: 'Dimych',
         age: 32,
         address: {
            title: 'Minsk'
         }
      }
   ]

   let admins = users
   admins.push({name: 'Bandyugan', age: 10, address: {title: 'Minsk'}})
   expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
   let usersCount = 100
   let adminCount = usersCount

   adminCount++

})

test('referense type test2', () => {
   const address = {
      title: 'Minsk'
   }

   let user: UserType = {
      name: 'Dimych',
      age: 32,
      address: address
   }

   let user2: UserType = {
      name: 'Natasha',
      age: 30,
      address: address

   }

   user2.address.title = 'Minsk City'

   expect(user.address).toBe(user2.address)
   expect(user.address.title).toBe('Minsk City')
})
test('referense type array test', () => {
   const address = {
      title: 'Minsk City'
   }

   let user: UserType = {
      name: 'Dimych',
      age: 32,
      address: address
   }
   let user2: UserType = {
      name: 'Natasha',
      age: 30,
      address: address
   }

   const users = [user, user2, {name: 'Misha', age: 4, address: address}]

   const admins = [user, user2]

   admins[0].name = 'Dmitry'

   expect(user.address).toBe(user2.address)
   expect(user.address.title).toBe('Minsk City')
})
test('sort array test', () => {
   const letters = ['c', 'd', 'a', 'z', 'e']
   letters.sort()
   expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
})