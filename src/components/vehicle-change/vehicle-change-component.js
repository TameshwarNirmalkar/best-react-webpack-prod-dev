import React, { Fragment, useState } from 'react';
import Select from 'react-select';
import styles from './vehicle-change.scss';

const options = [
  { value: '1', label: 'Emp1' },
  { value: '2', label: 'Emp2' },
  { value: '3', label: 'Emp3' },
];

const VehicleChangeComponent = () => {
  const [selectedOption, setSelectedOption] = useState({ value: '2', label: 'Emp2' });
  const [masterData, setMasterData] = useState({
    masterField: {
      fieldOne: "a",
      fieldTwo: {
        fieldTwoOne: "b",
        fieldTwoTwo: "c",
      }
    }
  });

  const handleChange = async (val) => {
    const selOp = { value: val.value, label: val.label };
    // setSelectedOption(selOp);
    const valAwait = await setSelectedOption(prevState => ({ ...prevState, value: val.value, label: val.label }));
    console.log('selectedOption:::', selectedOption, valAwait);

    fetch(`https://jsonplaceholder.typicode.com/todos/${selectedOption.value}`)
      .then(response => response.json())
      .then(res => {
        console.log('REsponse: ', res);
        const data = {
          masterField: { ...res }
        };
        setMasterData({ ...masterData, ...data });
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
              {JSON.stringify(masterData)}
            </div>
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
