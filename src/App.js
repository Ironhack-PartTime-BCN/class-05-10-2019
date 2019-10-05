import React, { Component } from 'react';
import Counter from './Counter';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showCounter: true,
      form: 'estado inicial'
    }
    console.log('mounting - constructor');
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleIncrement() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  handleToggleVisibility() {
    this.setState({
      showCounter: !this.state.showCounter,
    })
  }

  componentDidMount() {
    console.log('mounting - CDM')
  }

  componentDidUpdate() {
    console.log('updating - CDU')
    document.title = this.state.counter;
  }

  showCounter() {
    const { counter, showCounter } = this.state;
    if (showCounter){
      return <Counter counter={counter} />;
    } else {
      return null;
    }
  }

  handleForm(event) {
    console.log(event.target.value)
    this.setState({
      form: event.target.value
    })
  }

  render() {
    console.log('render')
    const { counter, showCounter, form } = this.state;
    return (
      <div className="App">
        <input value={form} onChange={this.handleForm}/>
        <h1>Counter</h1>
        {this.showCounter()}
        {showCounter ? (<Counter counter={counter} />) : null }
        {showCounter && <Counter counter={counter} />}
        {!showCounter && 'showcounter negado'}
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleToggleVisibility}>Show/hide Counter</button>
      </div>
    );
  }
}

export default App;
