import React from 'react'
import { useSelector } from 'react-redux';
import Record from '../Records/Records';

const RecordList = () => {
  let records = useSelector(state => state);

  return(
    <>
    <table className="table">
      <tbody>
    {
      records?.map(item => {
        return <Record key={item.id} item={item} />
      })
    }
      </tbody>
    </table>
    </>
  );
} 

export default RecordList;