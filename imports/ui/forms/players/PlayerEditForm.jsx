import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';
// import SubmitField from 'uniforms-bootstrap4/SubmitField';
import { Button } from 'reactstrap';
import PlayersSchema from '../../../api/players/schema';
import '../CustomUniForm.less';

const EditField = props =>
  <Button className="btn-blue btn-form-update" size="lg" block >Update</Button>;

const PlayerEditForm = ({ onSubmit, model = {} }) => (
  <AutoForm
    onSubmit={onSubmit}
    schema={PlayersSchema.pick('name', 'surname', 'school', 'grade', 'birthday')}
    submitField={EditField}
    model={model}
    showInlineError
  />
);

export default PlayerEditForm;
