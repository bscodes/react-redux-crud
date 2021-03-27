import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addRecord } from '../../actions';
import Button from '../Button/Button'
import './Input.scss';


const Input = () => {
  let [recordId, setRecordId] = useState(null);
  let [recordContract, setRecordContract] = useState(null);
  let [recordBid, setRecordBid] = useState(null);
  let [recordData, setRecordData] = useState(null);

  let dispatch = useDispatch();
  
  return(
    <div className="input-row">
      <input 
        type="text"
        value={recordId}
        onChange={(e) => setRecordId(e.target.value)}
        name="no"
        placeholder="no giriniz."
      />
      <input 
        type="text"
        value={recordContract}
        onChange={(e) =>  setRecordContract(e.target.value)}
        name="contract"
        placeholder="kontrat giriniz."
      />
      <input 
        type="text"
        value={recordBid}
        onChange={(e) =>  setRecordBid(e.target.value)}
        name="bid"
        placeholder="teklif giriniz."
      />
      <input 
        type="text"
        value={recordData}
        onChange={(e) =>  setRecordData(e.target.value)}
        name="data"
        placeholder="data giriniz."
      />
      <Button
        title={"Kaydet"}
        onClick={() => {
          dispatch(
            addRecord(
              {
                id: recordId == null ? uuidv4() : recordId,
                contract: recordContract,
                bid: recordBid,
                data: recordData
              }
            )
          )
          
        }}
      />
    </div>
  );
}

export default Input;