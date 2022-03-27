import cardPic from '../img/katie-zaferes.png'
import ratingStar from '../img/star.svg'

export default function Card() {
  	return (
		<div className='Card'>
			<img src={cardPic} alt="Katie Zafares picture" className='card-image' />
			<div className="rating">
				<img src={ratingStar} alt="Rating star SVG" />
				<span> 5.0</span>
				<span> (6) • USA</span>
			</div>
			<p>Life lessons with Katie Zaferes</p>
			<p><b>From $136</b> / person</p>
		</div>
  	)
}