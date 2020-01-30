import React from 'react';

import Feature from './Feature';

export default class MainForm extends React.Component {
  render() {
    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>
        {Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;

          return (
            <Feature
              key={featureHash}
              featureHash={featureHash}
              feature={feature}
              features={this.props.features}
              selected={this.props.selected}
              handleChange={this.props.handleChange}
            />
          );
        })}
      </form>
    );
  }
}