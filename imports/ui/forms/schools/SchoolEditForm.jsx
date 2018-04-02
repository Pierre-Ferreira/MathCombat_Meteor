import React from 'react';
import { AutoForm } from 'uniforms-bootstrap4';
import SubmitField from 'uniforms-bootstrap4/SubmitField';
import SchoolsSchema from '../../../api/schools/schema';

const EditField = props =>
  <SubmitField value="Update" />;

const SchoolEditForm = ({ onSubmit, model = {} }) => (
  <AutoForm
    onSubmit={onSubmit}
    schema={SchoolsSchema.pick('name', 'address', 'suburb', 'city', 'country', 'type', 'website')}
    submitField={EditField}
    model={model}
    showInlineError
  />
);

export default SchoolEditForm;
