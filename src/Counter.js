import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Soy un hijo'
    }
    console.log('mounting - Counter - constructor');
    this.handleTitle = this.handleTitle.bind(this);
  }

  componentDidMount() {
    console.log('mounting - Counter - CDM')
  }

  componentDidUpdate() {
    console.log('updating - Counter - CDU')
  }

  componentWillUnmount() {
    console.log('unmounting - Counter - CWU 💀')
  }

  handleTitle() {
    this.setState({
      title: "Me han actualizado 🤯"
    })
  }

  render() {
    const { counter } = this.props;
    const { title } = this.state;
    console.log('render - Counter')
    return (
      <>
        <h2>{counter}</h2>
        <h3>{title}</h3>  
        <button onClick={this.handleTitle}>change title</button>
      </>
    );
  }
}

export default Counter;