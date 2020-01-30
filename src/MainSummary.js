import React from 'react';

import SummaryItem from './SummaryItem';
import SummaryTotal from './SummaryTotal';

export default class MainSummary extends React.Component {
  render() {
    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        {Object.entries(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          return (
            <SummaryItem
              key={featureHash}
              index={idx}
              label={feature[0]}
              value={feature[1].name}
              cost={feature[1].cost}
              className='summary__option'
            />
          );
        })}
        <SummaryTotal total={this.props.total} />
      </section>
    );
  }
}
