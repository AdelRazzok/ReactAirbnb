export default function Card(props) {

  	return (
		<div className='Card'>
			<img src={`./img/${props.imgName}`} alt='Card picture' className='card-image' />
			<div className="rating">
				<img src='./img/star.svg' alt="Rating star SVG" />
				<span> {props.ratingAverage}</span>
				<span> ({props.ratingNumber}) • USA</span>
			</div>
			<p>{props.cardText}</p>
			<p><b>From ${props.cardPrice}</b> / person</p>
		</div>
  	)
}