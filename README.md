# Delivery Fee Calculator

## To run this app:

```sh
  npm i
  npm start
```
## E-commerce solution for when a customer is ready with their shopping cart and we’d like to show them how much the delivery will cost. 

### Rules for calculating delivery price

1. Cart value
  - If cart value is less than 10€, surcharge will be the difference between cat value and 10€
  - For example if the cart value is 8.90€, the surcharge will be 1.10€
2. Delivery distance
  - Base fee for the first 1 km is 2€
  - For every additional 500 m 1€ is added 
  - Example 1: 1499 m: 2€ base fee + 1€ = 3€
  - Example 2: 1500 m: 2€ base fee + 1€ = 3€
  - Example 3: 1501 m: 2€ base fee + 1€ + 1€ = 4€
3. Number of items in the cart
  - Surcharge for five or more items: 50 cent per item
  - Surcharge for more than 12 items: 1,20€
  - Example 1: 4 items: no surcharge
  - Example 2: 5 items: 50 cents surcharge
  - Example 3: 10 items: 3€ surcharge (6 x 50 cents) is added
  - Example 4: If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)
4. Surcharge for Friday rush hours (3 - 7 PM UTC)
  - Delivery total multiplied by 1.2x
  - Still cannot be more than the maximum charge (15€)
5. The delivery fee can **never** be more than 15€, including possible surcharges.
6. The delivery is free (0€) when the cart value is equal or more than 100€.