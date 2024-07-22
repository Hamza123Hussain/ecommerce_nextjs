export const getUserFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem('users')
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.error('Error parsing cart from localStorage', error)
    return []
  }
}
export const getCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.error('Error parsing cart from localStorage', error)
    return []
  }
}
export const getProductsFromLocalStorage = () => {
  try {
    const savedProducts = localStorage.getItem('products')
    return savedProducts ? JSON.parse(savedProducts) : []
  } catch (error) {
    console.error('Error parsing products from localStorage', error)
    return []
  }
}
