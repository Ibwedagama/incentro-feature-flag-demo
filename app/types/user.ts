export interface User {
  userId: string
  email: string
  userGroup: 'beta' | 'regular' | 'premium'
  country: string
}
