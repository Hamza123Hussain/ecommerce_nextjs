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

export const getCountFromLocalStorage = () => {
  try {
    const savedProducts: any = localStorage.getItem('cartcount')
    return savedProducts !== null && savedProducts >= 1
      ? JSON.parse(savedProducts)
      : 0
  } catch (error) {
    console.error('Error parsing products from localStorage', error)
    return 0
  }
}

export const getPaymentFromLocalStorage = () => {
  try {
    const savedProducts = localStorage.getItem('payment')
    return savedProducts ? JSON.parse(savedProducts) : 'cash'
  } catch (error) {
    console.error('Error parsing products from localStorage', error)
    return 'cash'
  }
}
