import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';
import SubmitField from 'uniforms-bootstrap4/SubmitField';
import SchoolsSchema from '../../../api/schools/schema';

const CreateField = props =>
  <SubmitField value="Create" />;

const SchoolCreateForm = ({ onSubmit, model = {} }) => (
  <AutoForm
    onSubmit={onSubmit}
    model={model}
    schema={SchoolsSchema.pick('name', 'address', 'suburb', 'city', 'country', 'type', 'website')}
    submitField={CreateField}
    showInlineError
  />
);

export default SchoolCreateForm;
