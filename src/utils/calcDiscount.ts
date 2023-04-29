type calcDiscountType = (price: number, discount: number) => number

export const calcDiscount: calcDiscountType = (price, discount) => {
    if (discount > 0) {
        return Math.round(price * discount / 100)
    }

    else return price
}