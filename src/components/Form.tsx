import React from 'react'

type Props = {
    setOrder: React.Dispatch<React.SetStateAction<any>>,
}

export default function Form({setOrder}: Props) {

    // Time format "2023-01-02T10:00"
    let currentDateTime = new Date().toISOString().slice(0, -8);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newOrder = {
            total: e.currentTarget.total.value,
            distance: e.currentTarget.distance.value,
            items: e.currentTarget.items.value,
            time: e.currentTarget.time.value
        };
        setOrder(newOrder);
    }    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-row">
                  <label>Cart Value</label>
                  <div className="input-div">
                    <input name="total" type="float" />
                    <p>€</p>
                  </div>
                </div>

                <div className="input-row">
                  <label>Delivery Distance</label>
                  <div className="input-div">
                    <input name="distance" type="number"/>
                    <p>m</p>
                  </div>
                </div>

                <div className="input-row">
                  <label>Amount of Items</label>
                  <div className="input-div">
                    <input name="items" type="number"/>
                  </div>
                </div>

                <div className="input-row">
                  <label>Time</label>
                  <div className="input-div">
                    <input type="datetime-local" name="time" defaultValue={currentDateTime}/>
                  </div>
                </div>

                <button type="submit">Calculate Delivery Price</button>
            </form>
        </div>
    )
}
