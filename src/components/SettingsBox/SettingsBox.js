import React from 'react'
import './style.scss';

const Box = (props) => {
  return(
    <>
      <div className="settings-box d-flex ml-auto p-2">
        <p className="settings-title">
          Ayarlar
        </p>
        <p className="settings-title">
          Yatay Pencere Değerleri:
          {
            <span>
              {props.horizontal} {" "} {props.horizontalOutoff}
            </span>
          }
        </p>
        <p className="settings-title">
          Üst Dikey Pencere Değerleri: 
          {
            <span>
              {props.verticalTop} {" "} {props.verticalBottomOutoff}
            </span>
          }
          
        </p>
        <p className="settings-title mb-5">
          Alt Dikey Pencere Değerleri: 
          {
            <span>
              {props.verticalBottom} {" "} {props.verticalBottomOutoff}
            </span>
          }
        </p>
      </div>
    </>
  );
}

export default Box;