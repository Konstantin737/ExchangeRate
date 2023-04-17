import styles from './ButtonPanel.module.css'
import Button from '../button/Button';

const ButtonPanel = (props) => {
   let arrValutes = []
   for (var value of Object.values(props.data)) {
      arrValutes.push(value);
  }

   return (
      <div className={styles.btn_panel}>
         {arrValutes.map(item => <Button arrValutes={item} setupValute={props.setupValute} btnID={props.btnID} key = {item.ID}/>)}
      </div>
   )
}

export default ButtonPanel;