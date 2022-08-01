import React, { Fragment } from 'react';

export default function SelectedProduct({ id }) {
  return (
    <Fragment>
      {id && <div className="selected-product">Selected product #{id}</div>}
      {!id && <div>No product</div>}
    </Fragment>
  );
}
