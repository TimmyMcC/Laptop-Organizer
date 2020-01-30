import React from 'react';

import { USCurrencyFormat } from './USCurrencyFormat';
import slugify from 'slugify';

export default class FeatureOption extends React.Component {
  render() {
    return (
      <div key={this.props.itemHash}>
        <input
          type='radio'
          id={this.props.itemHash}
          className='feature__option'
          name={slugify(this.props.feature)}
          checked={
            this.props.item.name ===
            this.props.selected[this.props.feature].name
          }
          onChange={() => {
            this.props.handleChange(this.props.feature, this.props.item);
          }}
        ></input>
        <label htmlFor={this.props.itemHash} className='feature__label'>
          {this.props.item.name}
          {USCurrencyFormat.format(this.props.item.cost)}
        </label>
      </div>
    );
  }
}
