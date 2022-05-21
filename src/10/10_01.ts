export type UserType = {
   name: string
   hair: number
   address: { city: string, house?: 12 }
}

export type LaptopType = {
   title: string
}

export type UserWithLaptopType = UserType & {
   laptop: LaptopType
}

export type UserWithBookType = UserType & {
   books: Array<string>
}

export type CompanyType = {id: number, title: string}
export type WithCompaniesType = {
   companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
   const copy = {
      ...u,
      hair: u.hair / power
   }

   // copy.hair = u.hair / power

   return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
   return {
      ...u,
      address: {
         ...u.address,
         city: city
      },
   }

   // copy.address = {
   //    ...u.address,
   //    city: city
   // }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType, house: number) {
   return {
      ...u,
      address: {
         ...u.address,
         house: house
      },
   }

   // copy.address = {
   //    ...u.address,
   //    city: city
   // }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
   return {
      ...u,
      laptop: {
         ...u.laptop,
         title: laptop
      }
   }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBookType, newBook: string) {
   return {
      ...u,
      books: [...u.books, newBook]
   }
}

export function updateBook(u: UserWithBookType & UserWithLaptopType, oldBook: string, newBook: string){
   return {
      ...u,
      books: u.books.map(b => b === oldBook ? newBook : b)
   }
}

export function removeBook(u: UserWithBookType & UserWithLaptopType, bookForDelete: string){
   return {
      ...u,
      books: u.books.filter(b => b !== bookForDelete)
   }
}

export function updateCompanyTitle(user: WithCompaniesType & UserWithLaptopType, companyId: number, newTitle: string){
   return {
      ...user,
      companies: user.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
   }
}

export const updateCompanyTitle2 = (companies: {[key: string] : Array<CompanyType>},
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {

   let companyCopy = {...companies}
   companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
      {...c, title: newTitle} : c)

   return companyCopy
}