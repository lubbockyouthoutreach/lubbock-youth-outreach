import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Anchor from 'grommet/components/Anchor';
import Responsive from 'grommet/utils/Responsive';

class Nav extends React.Component {
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
    this.navigate = this.navigate.bind(this);
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

  /*
    Navigates by pushing the relative URL to the router.
    navigate needs to be wrapped in an arrow function before being passed
    to onClick because it has a custom parameter. onClick only passes an
    event, so it won't know how to supply other parameters. But you can't
    add parentheses to navigate because that would call it rather than
    passing it as a variable. Arrow functions allow navigate to have
    parentheses because they wrap it in a variable, so the function call
    doesn't happen until the variable is called as a function.
  */
  navigate(url) {
    this.props.history.push(url);
  }

  render() {
    return (
      <Header
        flex
        direction='row'
        responsive={false}
        pad='small'
      >
        <Box
          flex
          align='center'
          direction='column'
          responsive={false}
          pad='none'
        >
          <Title>
            Lubbock Youth Outreach
          </Title>
          <Box
            flex
            align='center'
            direction='row'
            responsive={false}
            pad='none'
          >
            <Menu
              responsive
              inline={!this.state.small}
              direction='row'
              icon={<MenuIcon />}
              dropAlign={{ right: 'right', top: 'top' }}
            >
              <Anchor onClick={() => this.navigate('/home')}>
                Home
              </Anchor>
              <Anchor onClick={() => this.navigate('/about')}>
                About LYO
              </Anchor>
              <Anchor onClick={() => this.navigate('/getinvolved')}>
                Get Involved
              </Anchor>
              <Anchor onClick={() => this.navigate('/parents')}>
                Parents
              </Anchor>
            </Menu>
          </Box>
        </Box>
      </Header>
    );
  }
}

Nav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Nav);
