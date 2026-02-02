//           iv. payment.js - Payment processing
//                           import { reduceStock } from './product.js';
//                           import { getCartItems, getCartTotal, clearCart } from './cart.js';
//                           import { applyDiscount } from './discount.js';
                          
//                           // TODO: Implement these functions
                          
//                           export function processPayment(paymentMethod, couponCode = null) {
//                             // 1. Get cart items and total
//                             // 2. Apply discount if coupon provided
//                             // 3. Validate payment method (card/upi/cod)
//                             // 4. Process payment (simulate)
//                             // 5. Reduce stock for all items
//                             // 6. Clear cart
//                             // 7. Generate order summary
                            
//                             // Return order summary:
//                             // {
//                             //   orderId: ...,
//                             //   items: [...],
//                             //   subtotal: ...,
//                             //   discount: ...,
//                             //   total: ...,
//                             //   paymentMethod: ...,
//                             //   status: 'success/failed',
//                             //   message: '...'
//                             // }
//                           }
                          
//                           export function validatePaymentMethod(method) {
//                             // Check if method is valid (card/upi/cod)
//                           }
                          
//                           function generateOrderId() {
//                             // Generate random order ID
//                             return 'ORD' + Date.now();
//                           }
//           iv. payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Function to process payment
export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  const cartItems = getCartItems();
  let subtotal = getCartTotal();

  // 2. Apply discount if coupon provided
  let discount = 0;
  if (couponCode) {
    discount = applyDiscount(subtotal, couponCode);
    subtotal -= discount;
  }

  // 3. Validate payment method (card/upi/cod)
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      orderId: null,
      items: cartItems,
      subtotal: subtotal + discount,
      discount: discount,
      total: subtotal,
      paymentMethod: paymentMethod,
      status: 'failed',
      message: 'Invalid payment method'
    };
  }

  // 4. Process payment (simulate)
  const paymentSuccess = true; // Simulate payment success

  if (!paymentSuccess) {
    return {
      orderId: null,
      items: cartItems,
      subtotal: subtotal + discount,
      discount: discount,
      total: subtotal,
      paymentMethod: paymentMethod,
      status: 'failed',
      message: 'Payment processing failed'
    };
  }

  // 5. Reduce stock for all items
  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // 6. Clear cart
  clearCart();

  // 7. Generate order summary
  const orderId = generateOrderId();

  return {
    orderId: orderId,
    items: cartItems,
    subtotal: subtotal + discount,
    discount: discount,
    total: subtotal,
    paymentMethod: paymentMethod,
    status: 'success',
    message: 'Payment processed successfully'
  };
}

// Function to validate payment method
export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method.toLowerCase());
}

// Function to generate a random order ID
function generateOrderId() {
  return 'ORD' + Date.now();
}