import style from './card.module.css';

const Card = ({ car, text, color }) => {
	return (
		<article className={`${style.card} ${style[color]}`}>
			<img src={`../../../public/images/${car}.svg`} />
			<h2 className={style.card_title}>{car.toUpperCase()}</h2>
			<p className={style.card_text}>{text}</p>
			<button className={`${style.card_button} ${style[color]}`}>
				Learn More
			</button>
		</article>
	);
};

export default Card;
