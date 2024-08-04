export const getUserFromLocalStorage = () => {
  if (typeof window === 'undefined') return []
  try {
    const savedCart = localStorage.getItem('users')
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.error('Error parsing users from localStorage', error)
    return []
  }
}

export const getCartFromLocalStorage = () => {
  if (typeof window === 'undefined') return []
  try {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.error('Error parsing cart from localStorage', error)
    return []
  }
}

export const getProductsFromLocalStorage = () => {
  if (typeof window === 'undefined') return []
  try {
    const savedProducts = localStorage.getItem('products')
    return savedProducts ? JSON.parse(savedProducts) : []
  } catch (error) {
    console.error('Error parsing products from localStorage', error)
    return []
  }
}

export const getCountFromLocalStorage = () => {
  if (typeof window === 'undefined') return 0

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
  if (typeof window === 'undefined') return 'cash'
  try {
    const savedPayment = localStorage.getItem('payment')
    return savedPayment ? JSON.parse(savedPayment) : 'cash'
  } catch (error) {
    console.error('Error parsing payment from localStorage', error)
    return 'cash'
  }
}

export const getIndexFromLocalStorage = () => {
  if (typeof window === 'undefined') return 0
  try {
    const savedIndex = localStorage.getItem('indexofadmin')
    return savedIndex ? JSON.parse(savedIndex) : 0
  } catch (error) {
    console.error('Error parsing index from localStorage', error)
    return 0
  }
}
