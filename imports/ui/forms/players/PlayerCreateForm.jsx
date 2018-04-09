import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';
// import SubmitField from 'uniforms-bootstrap4/SubmitField';
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

export default PlayerCreateForm;
