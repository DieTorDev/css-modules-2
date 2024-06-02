import Card from '../card/Card';
import style from './container.module.css';

const Container = () => {
	const TEXT = [
		'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
	];
	return (
		<main className={style.container}>
			<Card car={'sedans'} text={TEXT[0]} color={'orange'} />
			<Card car={'suvs'} text={TEXT[1]} color={'blue'} />
			<Card car={'luxury'} text={TEXT[2]} color={'cyan'} />
		</main>
	);
};

export default Container;
