import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Anchor from 'grommet/components/Anchor';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    /*
      navigate needs to be bound to the context of Nav to access the router,
      since it is being called from other elements.
    */
    this.navigate = this.navigate.bind(this);
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
      <div>
        <Header
          fixed
          flex
          direction='row'
          responsive={false}
          pad={{ horizontal: 'small' }}
        >
          <Title>
            LYO
          </Title>
          <Menu
            icon={<MenuIcon />}
            dropAlign={{ left: 'left', top: 'top' }}
          >
            <Anchor onClick={() => this.navigate('/')}>
              Home
            </Anchor>
          </Menu>
        </Header>
      </div>
    );
  }
}

Nav.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Nav);
