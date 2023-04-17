import { useState } from 'react';
import './IndicationPanelReverse.css'

const IndicationPanelReverse = ({itemData, clearInput, setClearInput}) => {
   let placeholder;
   let enteredNumber;
   let [result, setResult] = useState('Готов к конвертации.');

   if(itemData === '') {
      placeholder='Не выбрана валюта';
      enteredNumber = '';
   } else {
      placeholder=`Введите кол-во`;
   };


   const searchUser = (e) => {
      setClearInput(false);
      enteredNumber = e.target.value;
      if(itemData === '') {
         setResult('Выберете валюту');
      } else {
         setResult((+enteredNumber * (1/((itemData.Value)/itemData.Nominal))).toFixed(2) + ' ' + itemData.CharCode);
      };
   };


   return (
      <div className="indication_panel">
         {itemData === ''?'':<p style={{fontSize: '20px'}}>{`1 RUB = ${(1/((itemData.Value)/itemData.Nominal)).toFixed(2)} ${itemData.CharCode}`}</p>}
         <input 
            style={{padding: '5px', fontSize: '20px'}} 
            placeholder={placeholder} 
            type={'number'}
            onChange={searchUser}
            value={clearInput===true?'':enteredNumber}>
         </input>
         {itemData === ''?'':<p style={{fontSize: '20px'}}>RUB</p>}
         <span style={{fontSize: '30px'}}>=</span>
         <span style={{fontSize: '20px'}}>{clearInput===true?`0 ${itemData.CharCode}`:result}</span>
      </div>
   );
};

export default IndicationPanelReverse;