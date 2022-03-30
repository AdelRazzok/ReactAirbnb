export default function Card(props) {
	let badgeTxt
	if (props.data.openSpots === 0) {
		badgeTxt = 'Sold out'
	} else if (props.data.location === 'online') {
		badgeTxt = 'Online'
	}

  	return (
		<div className='Card'>
			{badgeTxt && <div className="badge">{badgeTxt}</div>}
			<img src={`./img/${props.data.imgName}`} alt='Card picture' className='card-image' />
			<div className="rating">
				<img src='./img/star.svg' alt="Rating star SVG" />
				<span> {props.data.ratingAverage}</span>
				<span> ({props.data.ratingNumber}) • USA</span>
			</div>
			<p>{props.data.cardText}</p>
			<p><b>From ${props.data.cardPrice}</b> / person</p>
		</div>
  	)
}