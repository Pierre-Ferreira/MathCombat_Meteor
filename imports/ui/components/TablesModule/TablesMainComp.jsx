import React from 'react';
import './TablesMainComp.css';
import GameSettingsContainer from '../../containers/TablesModule/GameSettingsContainer';
import GameFeedbackContainer from '../../containers/TablesModule/GameFeedbackContainer';
import GameInteractionContainer from '../../containers/TablesModule/GameInteractionContainer';

const TablesMainComp = () => {
  return (
    <div id="table-main-container-area">
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
};

export default TablesMainComp;
