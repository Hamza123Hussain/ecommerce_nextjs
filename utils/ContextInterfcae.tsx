import { Product } from './ProductInterface'
import { UserDetails } from './UserDetailInterface'

export interface AppContextProps {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  userDetails: UserDetails
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>
}
