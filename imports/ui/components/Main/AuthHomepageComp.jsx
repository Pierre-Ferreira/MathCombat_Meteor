import React from 'react';
import WelcomeContainer from '../../containers/Main/WelcomeContainer';
import MainResultsContainer from '../../containers/Results/MainResultsContainer';
import './AuthHomepageComp.less';

const AuthHomepageComp = (props) => {
  return (
    <div className="auth-homepage-layout">
      <WelcomeContainer />
      <MainResultsContainer />
    </div>
  );
};

// WelcomeComp.propTypes = {
//
// };

export default AuthHomepageComp;
