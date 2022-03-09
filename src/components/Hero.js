import masonry from '../img/masonry.png'

export default function Hero() {
  return (
	<div className='Hero'>
		<img src={masonry} alt='Banner image with masonry layout' className='hero-img' />
		<div className="hero-container">
			<h1 className="hero-title">Online Experiences</h1>
			<h2 className="hero-subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
		</div>
	</div>
  )
}
