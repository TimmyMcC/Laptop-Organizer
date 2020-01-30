import React from 'react';

import './App.css';
import MainForm from './MainForm';
import MainSummary from './MainSummary';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: {
        'Processor': {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700,
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200,
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98,
        },
        'Display': {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
      },
    }
  }
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
    return (
      <div className='App'>
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            features={this.props.features}
            selected={this.state.selected}
            handleChange={this.updateFeature}
          />
          <MainSummary selected={this.state.selected} total={total} />
        </main>
      </div>
    );
  }
}