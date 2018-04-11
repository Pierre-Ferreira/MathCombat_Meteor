import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './TablesMainComp.less';
import GameSettingsContainer from '../../containers/TablesModule/GameSettingsContainer';
import GameFeedbackContainer from '../../containers/TablesModule/GameFeedbackContainer';
import GameInteractionContainer from '../../containers/TablesModule/GameInteractionContainer';

const closeButtonHandler = (props) => {
  props.history.goBack();
};

const TablesMainComp = (props) => {
  return (
    <div className="modal show table-main-modal">
      <div className="modal-dialog">
        <div className="modal-content container-fluid">
          <div className="row">
            <Button
              color="danger"
              size="lg"
              block
              onClick={() => closeButtonHandler(props)}
              disabled={props.gameStartButtonDisabled}
            >
              BACK
            </Button>
          </div>
          <div className="modal-header">
            <h1 className="text-center">Tables Practice</h1>
          </div>
          <div id="table-main-container-area">
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
      </div>
    </div>
  );
};

TablesMainComp.propTypes = {
  gameStartButtonDisabled: PropTypes.bool.isRequired,
};

export default TablesMainComp;
