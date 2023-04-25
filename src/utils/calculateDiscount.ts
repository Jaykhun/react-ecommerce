type calculateDiscountType = (price: number, discount: number) => number

export const calculateDiscount: calculateDiscountType = (price, discount) =>
    Math.round(price * discount / 100)