import { useState, useMemo } from 'react';
import '../indication-panel/IndicationPanel.css'

let enteredNumber = '';

const IndicationPanelReverse = ({itemData}) => {
   let placeholder=`Введите кол-во`;
   let [result, setResult] = useState(0);

   useMemo(()=>{
      if(itemData !== '') {
         setResult((+enteredNumber * (1/((itemData.Value)/itemData.Nominal))).toFixed(2) + ' ' + itemData.CharCode);
      };
   }, [itemData])


   const searchUser = (e) => {
      enteredNumber = e.target.value;
      if(itemData === '') {
      } else if(e.target.value < 0) {
         enteredNumber = Math.abs(e.target.value)
         setResult((+enteredNumber * (1/((itemData.Value)/itemData.Nominal))).toFixed(2) + ' ' + itemData.CharCode);
      } else {
         setResult((+enteredNumber * (1/((itemData.Value)/itemData.Nominal))).toFixed(2) + ' ' + itemData.CharCode);
      };
   };


   return (
      itemData&&<div className="indication_panel">
         {itemData === ''?'':<p style={{fontSize: '20px'}}>{`1 RUB = ${(1/((itemData.Value)/itemData.Nominal)).toFixed(2)} ${itemData.CharCode}`}</p>}
         <input 
            style={{padding: '5px', fontSize: '20px'}} 
            placeholder={placeholder} 
            type={'number'}
            onChange={searchUser}
            value={enteredNumber}>
         </input>
         {itemData === ''?'':<p style={{fontSize: '20px'}}>RUB</p>}
         <span style={{fontSize: '30px'}}>=</span>
         <span style={{fontSize: '20px'}}>{result}</span>
      </div>
   );
};

export default IndicationPanelReverse;