import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import bookmarkicon from '../../img/bookmark.svg'
import shareicon from '../../img/Share.svg'

class Owl extends React.Component{
  render()
  {
    return (
    <OwlCarousel
    className="owl-theme"
    loop
		margin={0}
		center
		nav
		ref="card"
		>
     <div className="item concert-item">
		 	<div className="card-icon"></div>
		 	<div className="card-body">
				<div className="card-img">
				<div className="card-main-info text-white">
					<span className="card-title">Концерт KODALINE</span>
					<div>
						<span className="card-time">сегодня в 9:00</span>
						<span className="card-distance">~ 20м</span>
					</div>
				</div>
				</div>
				
				<div className="card-people">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<span>+ 18 участников</span>
				</div>
				<p className="card-desc">Устраиваем вечеринку в честь завершения Хакатона 😎 Всем крутым разрабам и просто интересным персонам - Вэлком! Посидим, похейтим PHP, и поразмыслим: “есть ли жизнь после компиляции?”</p>
				<div className="card-bottom">
					<img src={bookmarkicon} alt=""/>
					<img src={shareicon} alt=""/>
				</div>
			 </div>
			 <div className="buttons-desicion">
				 <button onClick={() => this.refs.card.next()} className="yes">Пойду</button>
				 <button onClick={() => this.refs.card.next()} className="no">Не пойду</button>
			 </div>
		 </div>
		 <div className="item concert-item">
		 	<div className="card-icon"></div>
		 	<div className="card-body">
				<div className="card-img">
				<div className="card-main-info text-white">
					<span className="card-title">Концерт KODALINE</span>
					<div>
						<span className="card-time">сегодня в 9:00</span>
						<span className="card-distance">~ 20м</span>
					</div>
				</div>
				</div>
				
				<div className="card-people">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<span>+ 18 участников</span>
				</div>
				<p className="card-desc">Устраиваем вечеринку в честь завершения Хакатона 😎 Всем крутым разрабам и просто интересным персонам - Вэлком! Посидим, похейтим PHP, и поразмыслим: “есть ли жизнь после компиляции?”</p>
				<div className="card-bottom">
					<img src={bookmarkicon} alt=""/>
					<img src={shareicon} alt=""/>
				</div>
			 </div>
			 <div className="buttons-desicion">
				 <button onClick={() => this.refs.card.next()} className="yes">Пойду</button>
				 <button onClick={() => this.refs.card.next()} className="no">Не пойду</button>
			 </div>
		 </div>
		 <div className="item concert-item">
		 	<div className="card-icon"></div>
		 	<div className="card-body">
				<div className="card-img">
				<div className="card-main-info text-white">
					<span className="card-title">Концерт KODALINE</span>
					<div>
						<span className="card-time">сегодня в 9:00</span>
						<span className="card-distance">~ 20м</span>
					</div>
				</div>
				</div>
				
				<div className="card-people">
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<span>+ 18 участников</span>
				</div>
				<p className="card-desc">Устраиваем вечеринку в честь завершения Хакатона 😎 Всем крутым разрабам и просто интересным персонам - Вэлком! Посидим, похейтим PHP, и поразмыслим: “есть ли жизнь после компиляции?”</p>
				<div className="card-bottom">
					<img src={bookmarkicon} alt=""/>
					<img src={shareicon} alt=""/>
				</div>
			 </div>
			 <div className="buttons-desicion">
				 <button onClick={() => this.refs.card.next()} className="yes">Пойду</button>
				 <button onClick={() => this.refs.card.next()} className="no">Не пойду</button>
			 </div>
		 </div>
</OwlCarousel>
    )
  }
}

export default Owl