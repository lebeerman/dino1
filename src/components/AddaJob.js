import React from 'react';

export const AddaJob = ({addListing}) => {
  return (
    <aside id="side-bar">
      <h3>Add a Job</h3>
      <form className="job-form" onSubmit={addListing}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="pay">Compensation</label>
        <input type="text" name="pay"  />
        <label htmlFor="description">Description</label>
        <textarea name="description" rows="8" cols="40" />
        <input type="submit" name="Submit" value="Submit" />
      </form>
    </aside> 
  );
};


