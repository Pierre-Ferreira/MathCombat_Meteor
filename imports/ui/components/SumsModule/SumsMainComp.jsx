import React from 'react';
import './SumsMainComp.css';
import GameSettingsContainer from '../../containers/SumsModule/GameSettingsContainer';
import GameFeedbackContainer from '../../containers/SumsModule/GameFeedbackContainer';
import GameInteractionContainer from '../../containers/SumsModule/GameInteractionContainer';

const SumsMainComp = () => (
  <div id="sums-main-container-area">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 full-width">
          <section id="upper-container-area">
            <GameSettingsContainer />
          </section>
          <section id="lower-container-area">
            <GameFeedbackContainer />
            <GameInteractionContainer />
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default SumsMainComp;
