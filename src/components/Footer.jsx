import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Anchor from 'grommet/components/Anchor';
import Responsive from 'grommet/utils/Responsive';
import SocialShare from 'grommet/components/SocialShare';

class Foot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      small: false,
    };

    /*
      navigate needs to be bound to the context of Nav to access the router,
      since it is being called from other elements.
    */
    this.onResponsive = this.onResponsive.bind(this);
  }

  componentDidMount() {
    this.responsive = Responsive.start(this.onResponsive);
  }

  componentWillUnmount() {
    this.responsive.stop();
  }

  onResponsive(small) {
    this.setState({ small });
  }

  render() {
    return (
      <Box
        align='start'
        margin='small'
        pad='medium'
      >
        <Footer
          primary='true'
        >
          Home stuff
          <Box
            flex
            justify='end'
            direction='row'
          >
            <SocialShare
              type='facebook'
              link='https://grommet.io'
            />
            <SocialShare
              type='twitter'
              link='https://grommet.io'
              text='Check out the Lubbock Youth Outreach organization!'
            />
          </Box>
        </Footer>
      </Box>
    );
  }
}

Foot.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Foot);
