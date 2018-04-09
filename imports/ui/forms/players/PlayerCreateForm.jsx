import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import PlayersSchema from '../../../api/players/schema';
import '../CustomUniForm.less';

const CreateField = props =>
  // <SubmitField value="Create" />;
  <Button className="btn-blue btn-form-update" size="lg" block >Add</Button>;

const PlayerCreateForm = ({ onSubmit, model = {} }) => (
  <AutoForm
    onSubmit={onSubmit}
    model={model}
    schema={PlayersSchema.pick('name', 'surname', 'school', 'grade', 'birthday')}
    submitField={CreateField}
    showInlineError
  />
);

PlayerCreateForm.propTypes = {
  model: PropTypes.shape.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PlayerCreateForm;
