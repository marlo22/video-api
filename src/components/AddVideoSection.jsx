// @flow
import * as React from 'react';

// Components
import AddVideoForm from './AddVideoForm';

const AddVideoSection = (): React.Fragment => (
  <React.Fragment>
    <h1 className="hide">
      MovieManager
    </h1>
    <section>
      <h2 className="hide">
        Dodaj film
      </h2>
      <label htmlFor="add-movie" className="text-header">
        Dodaj film
      </label>
      <AddVideoForm />
    </section>
  </React.Fragment>
);

export default AddVideoSection;
