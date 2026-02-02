//           iii. discount.js - Coupon and discount logic
//                           // Available coupons
//                           const coupons = {
//                             'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
//                             'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
//                             'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
//                           };
                          
//                           // TODO: Implement these functions
                          
//                           export function validateCoupon(couponCode, cartTotal, cartItems) {
//                             // 1. Check if coupon exists
//                             // 2. Check minimum amount requirement
//                             // 3. Check category requirement (if any)
//                             // Return { valid: true/false, message: '...' }
//                           }
                          
//                           export function calculateDiscount(couponCode, cartTotal) {
//                             // Calculate discount amount based on coupon type
//                             // Return discount amount
//                           }
                          
//                           export function applyDiscount(cartTotal, couponCode, cartItems) {
//                             // 1. Validate coupon
//                             // 2. If valid, calculate discount
//                             // 3. Return final amount and discount details
//                             // Return { 
//                             //   originalTotal: ..., 
//                             //   discount: ..., 
//                             //   finalTotal: ...,
//                             //   message: '...'
//                             // }
//                           }
//           iii. discount.js - Coupon and discount logic
// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

// Function to validate coupon
export function validateCoupon(couponCode, cartTotal, cartItems) {
  const coupon = coupons[couponCode];
  if (!coupon) {
    return { valid: false, message: 'Invalid coupon code' };
  }

  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: `Minimum amount for this coupon is ${coupon.minAmount}` };
  }

  if (coupon.category) {
    const hasCategoryItem = cartItems.some(item => item.product.category.toLowerCase() === coupon.category.toLowerCase());
    if (!hasCategoryItem) {
      return { valid: false, message: `This coupon is only valid for ${coupon.category} products` };
    }
  }

  return { valid: true, message: 'Coupon is valid' };
}

// Function to calculate discount
export function calculateDiscount(couponCode, cartTotal) {
  const coupon = coupons[couponCode];
  if (!coupon) {
    return 0;
  }

  if (coupon.type === 'percentage') {
    return cartTotal * (coupon.value / 100);
  } else if (coupon.type === 'flat') {
    return coupon.value;
  }
  return 0;
}

// Function to apply discount
export function applyDiscount(cartTotal, couponCode, cartItems) {
  const validation = validateCoupon(couponCode, cartTotal, cartItems);
  if (!validation.valid) {
    return { originalTotal: cartTotal, discount: 0, finalTotal: cartTotal, message: validation.message };
  }

  const discount = calculateDiscount(couponCode, cartTotal);
  const finalTotal = Math.max(0, cartTotal - discount);

  return { originalTotal: cartTotal, discount, finalTotal, message: `Coupon applied successfully. You saved ₹${discount}` };
}