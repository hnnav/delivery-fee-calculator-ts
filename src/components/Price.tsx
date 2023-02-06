import { useState, useEffect } from 'react'
import { Order } from '../interfaces'

interface Props {
    order: Order
}

export default function Price({ order }: Props) {

    const [deliveryTotal, setDeliveryTotal] = useState(0);
    console.log('Delivery total:', deliveryTotal);

    useEffect(() => {
        
        const cartValueFee = () => {
            let fee = 0;
            // Fee for orders less than 10€ (rounded to 2 decimals)
            if (order.total < 10) {
                fee = Math.round((10 - order.total) * 100) / 100
            }
            console.log('Cart value fee:', fee);
            return fee;
        }

        const distanceFee = () => {
            // 2€ for first 1000m
            let fee = 2
            // 1€ for every additional 500m
            if (order.distance > 1000) {
                fee = Math.ceil((order.distance - 1000) / 500) + 2;
            }
            console.log('Distance fee:', fee);
            return fee;
        }
    
        const itemsFee = () => {
            let fee = 0
            // 50 cent per item for five or more
            if (order.items >= 5) {
                fee = (order.items - 4) * 0.5
            }
            // 1,20€ for more than 12 items
            if (order.items >= 12) {
                fee = fee + 1.2
            }
            console.log('Items fee:', fee);
            return fee;
        }

        const fridayRushHours = () => {
            // Convert time to Date format & UTC timezone
            const dateTime = new Date(order.time);
            const UtcDateTime = new Date(dateTime.toUTCString());

            // Check if day of the week is friday
            const dayOfWeek = UtcDateTime.getDay();
            const isFriday = dayOfWeek === 5

            // Check if time is between 3 - 7 PM
            const currentHours = UtcDateTime.getHours();
            const isRushHours = (currentHours >= 15) && (currentHours < 19)

            // Return true if time is on Friday rush hours
            return isFriday && isRushHours
        }
    
        // 1.2x fee if friday rush hours
        const feeTotal = fridayRushHours() ? (cartValueFee() + distanceFee() + itemsFee()) * 1.2 : cartValueFee() + distanceFee() + itemsFee()

        // Save fee total to state (rounded to 2 decimals)
        if ((order.total < 100) && (feeTotal <= 15))  {
            setDeliveryTotal(Math.round(feeTotal * 100) / 100)
        } 
        // 15 € max fee
        else if ((order.total < 100) && (feeTotal > 15)) {
            setDeliveryTotal(15)
        } 
        // 0€ fee when order total above 100€
        else if (order.total >= 100) {
            setDeliveryTotal(0)
        }
    }, [order])

    return (
        <div>
            <h3>Delivery Price: {deliveryTotal} €</h3>
        </div>
    )
}
