import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';
import SubmitField from 'uniforms-bootstrap4/SubmitField';
import PlayersSchema from '../../../api/players/schema';

const CreateField = props =>
  <SubmitField value="Create" />;

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
