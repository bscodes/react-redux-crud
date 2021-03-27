import React, { useState, useRef } from 'react'
import './style.scss';
import { staticRecords } from '../../states/index';
import uploadIcon from '../../assets/images/upload.svg';
import settings from '../../assets/images/settings.svg';
import plus from '../../assets/images/plus.svg';
import Checkbox from '../Checkbox/Checkbox';
import * as Utils from '../../helpers/Utils';

const StaticTable = () => {
  const [ selectedContract, setSelectedContract ] = useState("");
  const [ showDropdown, setShowDropdown ] = useState(false);
  let [ checked, setChecked ] = useState({
    data: true,
    id: true,
    kontrat: true,
    teklif: true
  });
  const container = useRef();

  Utils.useOutsideClick(container, () => {
    setShowDropdown(false);
  });

  const handleChange = (event) => {
    setChecked({...checked, [event.target.name] : event.target.checked });
  }

  const labels = [
    {
      name: 'check-box-1',
      label: 'id',
    },{
      name: 'check-box-2',
      label: 'kontrat',
    },{
      name: 'check-box-3',
      label: 'teklif',
    },{
      name: 'check-box-4',
      label: 'data',
    },
  ];

  return(
    <>
      <div className="controllers d-flex flex-row">
        <div className="select-box mr-auto mt-3 ml-2 mb-2">
          <select 
            value={selectedContract} 
            onChange={(e) => setSelectedContract(e.target.value)} 
          >
            <option value="">Kontrat Seçiniz</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2011">2011</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="filter-box ml-auto mt-3 mr-2 mb-2 d-flex flex-row">
          <div className="icon-wrapper">
            <img src={uploadIcon} alt="uploadIcon" className="svg-icon"/>
          </div>
          <div className="icon-wrapper">
            <img src={settings}   
              alt="settings" 
              className="svg-icon" 
              onClick={() => setShowDropdown(!showDropdown)} 
              ref={container}
            />
            {showDropdown && 
              <div className="filter-box-checkbox-wrapper d-flex flex-column" >
                {labels.map((item, index) => {
                  return(
                    <label key={index} >
                      <Checkbox
                        checked={checked[item.label]}
                        name={item.label}
                        onChange={handleChange}
                      />
                      <span> {item.label} </span>
                    </label>
                  );
                })}
              </div>
            }
          </div>
          <div className="icon-wrapper">
            <img src={plus} alt="plus" className="svg-icon"/>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="table-thead-tr">
            {checked.id && <th scope="col">Id</th>}
            {checked.kontrat && <th scope="col">Kontrat</th>}
            {checked.teklif && <th scope="col">Teklif</th>}
            {checked.data && <th scope="col">Data</th>}
          </tr>
        </thead>
        <tbody>
          {
            staticRecords?.filter(item => {
                if (selectedContract !== "") {
                  return item.contract === selectedContract
                }
                return item.contract;
              }).map(item => {
              const { id, contract, bid, data} = item;
              
              return (
              <tr key={id} >
                {checked.id && <th scope="row"> {id} </th>}
                {checked.kontrat && <td> {contract} </td>}
                {checked.teklif && <td> {bid} </td>}
                {checked.data && <td> {data} </td>}
              </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default StaticTable;