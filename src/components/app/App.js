import './App.css';
import ButtonPanel from '../button-panel/ButtonPanel';
import IndicationPanel from '../indication-panel/IndicationPanel';
import IndicationPanelReverse from '../indication-panel-reverse/IndicationPanelReverse';
// import IndicationPanelTest from '../test-panel/IndicationPanelTest';
// import IndicationPanelReverseTest from '../test-panel/IndicationPanelReversTest';
import Header from '../header/Header';
import { useState, useEffect } from 'react';


function App() {

  let [isDataLoading, setIsDataLoading] = useState(true);

  let [data, setData] = useState();
  useEffect(()=>{
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      setData({...json});
      setIsDataLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   setIsDataLoading(true);
  //   const getData = async () => {
  //     const resp = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  //     const json = await resp.json()
  //     setData(json);
  //   }
  //   setIsDataLoading(false);
  //   getData();
  // }, []);

  let [btnID, setBtnID] = useState('');
  let [itemData, setItemData] = useState('');
  let [clearInputTest, setClearInputTest] = useState(false);

  const setupValute = (id) => {
    setBtnID(id);
    setItemData(...Object.values(data.Valute).filter(item => item.ID===id));
  }
  return (
    <div className="App">
      <Header/>
      {!isDataLoading&&!itemData&&<span className='message'>Выберете валюту для конвертации</span>}
      {isDataLoading === true
      ?(<span class="loader">Загрузка...</span>)
      :<ButtonPanel data={data.Valute} setupValute={setupValute} btnID = {btnID}/>
      }
      <IndicationPanel itemData={itemData} clearInputTest={clearInputTest} setClearInputTest={setClearInputTest}/>
      <IndicationPanelReverse itemData={itemData} clearInputTest={clearInputTest} setClearInputTest={setClearInputTest}/>
    </div>
  );
}

export default App;


