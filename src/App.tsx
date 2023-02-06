import { useState } from 'react'
import Form from './components/Form'
import Price from './components/Price'
import { Order } from './interfaces'

function App() {

  const [order, setOrder] = useState<Order | null>(null)
  
  return (
    <div className="App">
      <h1>Delivery Fee calculator</h1>
      <Form setOrder={setOrder}/>
      
      {/* Display price if order exists */}
      {order && <Price order={order}/>}
    </div>
  );
}

export default App;