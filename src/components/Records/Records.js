import React from 'react';


const Record = ({item}) => {
  return(
    <>
      <tr>
        <th scope="row">{item.id.length > 10 ? item.id[3]: item.id}</th>
        <td>{item.contract}</td>
        <td>{item.bid}</td>
        <td>{item.data}</td>
      </tr>
    </>
  );
}

export default Record;