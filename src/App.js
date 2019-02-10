import React, { Component } from 'react'
import ProductList from './components/ProductList'

class App extends Component {

  state = {
    products: [
      {id: 1, name: 'AirMax 90', brand: 'Nike'},
      {id: 2, name: 'Yeezy', brand: 'Adidas'},
      {id: 3, name: 'Classic', brand: 'Reebok'},
    ],
    selectedProducts: []
  }

  handleProductSelect = product =>  {
    this.setState(prevState => ({
      selectedProducts: [...prevState.selectedProducts, product]
    }))
  }

  render() {
    const { products, selectedProducts } = this.state
    return (
      <div>
        <h1>My Product Store</h1>
        <p>You have selected {selectedProducts.length} product(s).</p>
        <ProductList
          products={products}
          onProductSelect={this.handleProductSelect}
        />
      </div>
    )
  }
}

export default App
