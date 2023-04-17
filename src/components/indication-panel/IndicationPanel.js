import { useState, useMemo } from 'react';
import './IndicationPanel.css'

let enteredNumber = '';

const IndicationPanel = ({itemData}) => {
   let placeholder=`Введите кол-во`;
   let [result, setResult] = useState(0);

   useMemo(()=>{
      if(itemData !== '') {
         setResult((+enteredNumber * ((itemData.Value)/itemData.Nominal)).toFixed(2) + ' RUB');
      };
   }, [itemData]);


   const searchUser = (e) => {
      if(e.target.value < 0) {
         enteredNumber = Math.abs(e.target.value)
         setResult((enteredNumber * ((itemData.Value)/itemData.Nominal)).toFixed(2) + ' RUB');
      } else {
         enteredNumber = e.target.value;
         setResult((enteredNumber * ((itemData.Value)/itemData.Nominal)).toFixed(2) + ' RUB');
      };
   };

   return (
      itemData&&<div className="indication_panel">
         {itemData === ''?'':<p style={{fontSize: '20px'}}>{`1 ${itemData.CharCode} = ${((itemData.Value)/itemData.Nominal).toFixed(2)} RUB`}</p>}
         <input 
            style={{padding: '5px', fontSize: '20px'}} 
            placeholder={placeholder} 
            type={'number'}
            onChange={searchUser}
            value={enteredNumber}>
         </input>
         {itemData === ''?'':<p style={{fontSize: '20px'}}>{itemData.CharCode}</p>}
         <span style={{fontSize: '30px'}}>=</span>
         <span style={{fontSize: '20px'}}>{result}</span>
      </div>
   );
};

export default IndicationPanel;