import React from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Download from 'grommet/components/icons/base/Download';
import Button from 'grommet/components/Button';
import Label from 'grommet/components/Label';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.download = this.download.bind(this);
  }

  download() {
    window.open(this.props.file);
  }

  render() {
    return (
      <Box
        flex
        direction='row'
        responsive={false}
        colorIndex='light-2'
      >
        <Label>
          <Button
            primary={false}
            onClick={this.download}
            icon={<Download />}
          />
          {this.props.label}
        </Label>
      </Box>
    );
  }
}

Form.propTypes = {
  label: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
};

export default Form;
