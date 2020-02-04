import React, { Fragment } from 'react';
import style from './vehicle-change.scss';

const VehicleChangeComponent = () => {
  return (
    <Fragment>
      <div className={style['vehicle-comp']}>
        <div className="container">
          <div className="row">
            <div className="col"> Select Model </div>
            <div className="col"> Select Variant </div>
            <div className="w-100" />
            <div className="col"> col </div>
            <div className="col"> col </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VehicleChangeComponent;
