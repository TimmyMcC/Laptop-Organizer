import React, { Component } from 'react';
import Header from './Header';
import FeatureForms from './FeatureForms';
import MainSummary from './MainSummary';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  handleChange = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.keys(this.props.features).map((feature, index) =>
              <FeatureForms
                featureElement={feature}
                key={feature + '-' + index}
                features={this.props.features}
                selected={this.state.selected}
                onChange={this.handleChange}
                USCurrencyFormat={USCurrencyFormat}
              />
            )}
          </form>
          <MainSummary
            selected={this.state.selected}
            total={total}
            USCurrencyFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}