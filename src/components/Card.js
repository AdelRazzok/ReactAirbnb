export default function Card(props) {
	let badgeTxt
	if (props.openSpots === 0) {
		badgeTxt = 'Sold out'
	} else if (props.location === 'online') {
		badgeTxt = 'Online'
	}

  	return (
		<div className='Card'>
			{badgeTxt && <div className="badge">{badgeTxt}</div>}
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