import React from 'react';

import { USCurrencyFormat } from './USCurrencyFormat';

export default class SummaryItem extends React.Component {
  render() {
    return (
      <div className='summary__option' key={this.props.index}>
        <div className='summary__option__label'>{this.props.feature} </div>
        <div className='summary__option__value'>{this.props.value}</div>
        <div className='summary__option__cost'>
          {USCurrencyFormat.format(this.props.cost)}
        </div>
      </div>
    );
  }
}
