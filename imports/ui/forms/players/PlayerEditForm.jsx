import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';
import SubmitField from 'uniforms-bootstrap4/SubmitField';
import PlayersSchema from '../../../api/players/schema';

const EditField = props =>
  <SubmitField value="Update" />;

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
