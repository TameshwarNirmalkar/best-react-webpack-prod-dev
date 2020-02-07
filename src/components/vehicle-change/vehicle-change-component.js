import React, { Fragment, useReducer, useEffect, useState } from 'react';
import Select from 'react-select';
import styles from './vehicle-change.scss';
import { reducer, initialState } from './reducer';
import { VEHICLE_TYPES } from './action-type';

const options = [
  { value: '1', label: 'Emp1' },
  { value: '2', label: 'Emp2' },
  { value: '3', label: 'Emp3' },
];

const VehicleChangeComponent = () => {
  const [vehicleState, dispatch] = useReducer(reducer, initialState);
  console.log('vehicleState::', vehicleState);

  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`).then(response => response.json()).then(res => {
      dispatch({
        type: VEHICLE_TYPES.ALL_MODELS,
        paylod: res
      });
    });
  }, []);

  const handleChange = (val) => {
    const selOp = { value: val.value, label: val.label };
    setSelectedOption(selOp);
    fetch(`https://jsonplaceholder.typicode.com/todos/${val.value}`)
      .then(response => response.json())
      .then(res => {
        console.log('REsponse: ', res);
        dispatch({
          type: VEHICLE_TYPES.VEHICLE_INFO,
          paylod: { ...res }
        });
      });


  };

  return (
    <Fragment>
      <div className={styles['vehicle-comp']}>
        <div className="container">
          <div className="row">
            <div className="col">
              <span>Select Model</span>
              <Select
                value={selectedOption}
                onChange={handleChange}
                options={options} />

            </div>
            <div className="col">
              Select Variant
            </div>
            <div className="w-100 mt-2" />
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Complete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    vehicleState.modelList.map((emp, ind) => (
                      <tr key={ind}>
                        <th>{emp.id}</th>
                        <td>{emp.title}</td>
                        <td>
                          <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">
                              {(emp.completed) ? '♠' : '»'}
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>

            </div>
            <div className="w-100" />
            <div className="col"> col </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default VehicleChangeComponent;
