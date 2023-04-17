import './Header.css'

const Header = () => {

   const date = new Date();
   const day = date.getDate()
   const month = date.getMonth()
   const monthRus = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
   const year = date.getFullYear()


   return (
      <div className="header_panel">
         <div className="header_logo"></div>
         <h2>{`Официальные курсы валют Банка России на ${day} ${monthRus[month]} ${year} года`}</h2>
         <div className='photo'>
            <div className='star'/>
         </div>
      </div>
   )
}

export default Header;