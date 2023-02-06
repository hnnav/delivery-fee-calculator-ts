import React, { useState } from 'react'
import Form from './components/Form'
import Price from './components/Price'

// interface Order {
//   total: any,
//   distance: any,
//   items: any, 
//   time: any
// }

function App() {

  const [order, setOrder] = useState(null)
  
  return (
    <div className="App">
      <h1>Delivery Fee calculator</h1>
      <Form setOrder={setOrder}/>
      
      {/* Display price if order object not empty */}
      {order && <Price order={order}/>}
    </div>
  );
}

export default App;