import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedPlayerRouteComp = ({
  loggingIn,
  authenticated,
  playerID,
  component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (loggingIn) return <div />;
      let returnJSX = '';
      if (authenticated) {
        if (playerID) {
          returnJSX = (React.createElement(component, { ...props, loggingIn, authenticated }));
        } else {
          returnJSX = <Redirect to="/main/player_select" />;
        }
      } else {
        returnJSX = <Redirect to="/" />;
      }
      return returnJSX;
    }}
  />
);

// AuthenticatedRouteComp.propTypes = {
//   loggingIn: PropTypes.bool,
//   authenticated: PropTypes.bool,
//   component: PropTypes.func,
// };

export default AuthenticatedPlayerRouteComp;
