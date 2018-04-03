import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRouteComp = ({
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
          returnJSX = <Redirect to="/player/select" />;
        }
      } else {
        returnJSX = <Redirect to="/" />;
      }
      // return authenticated ?
      //   playerID ?
      //     (React.createElement(component, { ...props, loggingIn, authenticated })) :
      //   (<Redirect to="player/select" />):
      // (<Redirect to="/" />);
      return returnJSX;
    }}
  />
);

// AuthenticatedRouteComp.propTypes = {
//   loggingIn: PropTypes.bool,
//   authenticated: PropTypes.bool,
//   component: PropTypes.func,
// };

export default AuthenticatedRouteComp;
