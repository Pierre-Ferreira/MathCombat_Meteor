import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './SumsMainComp.less';
import GameSettingsContainer from '../../containers/SumsModule/GameSettingsContainer';
import GameFeedbackContainer from '../../containers/SumsModule/GameFeedbackContainer';
import GameInteractionContainer from '../../containers/SumsModule/GameInteractionContainer';

const closeButtonHandler = (props) => {
  props.history.goBack();
};

const SumsMainComp = (props) => {
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

SumsMainComp.propTypes = {
  gameStartButtonDisabled: PropTypes.bool.isRequired,
};

export default SumsMainComp;
// const SumsMainComp = () => (
//   <div id="sums-main-container-area">
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-xs-12 full-width">
//           <section id="upper-container-area">
//             <GameSettingsContainer />
//           </section>
//           <section id="lower-container-area">
//             <GameFeedbackContainer />
//             <GameInteractionContainer />
//           </section>
//         </div>
//       </div>
//     </div>
//   </div>
// );
//
// export default SumsMainComp;
