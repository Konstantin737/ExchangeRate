import './Button.css'

const Button = ({arrValutes, setupValute, btnID}) => {
 
   let btnClassActivOrDisable = 'disable_btn'

   if(btnID === arrValutes.ID) {
      btnClassActivOrDisable += ' active_btn';
   } else {
      btnClassActivOrDisable = 'disable_btn'
   }


   const choiceBtnValute = () => {

      if(btnClassActivOrDisable==='disable_btn') {
         setupValute(arrValutes.ID);
      } else {
         setupValute(arrValutes.ID);
      }
   }
   return (
      <div className='button' onClick={choiceBtnValute}>
         <span>{arrValutes.Name}</span>
         <div className={btnClassActivOrDisable}></div>
      </div>
   )
}

export default Button;