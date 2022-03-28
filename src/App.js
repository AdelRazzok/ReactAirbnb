import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<div className="card-carousel">
				<Card
					imgName='katie-zaferes.png'
					ratingAverage='5.0'
					ratingNumber='6'
					cardText='Life lessons with Katie Zaferes'
					cardPrice='136'
				/>

				<Card
					imgName='wedding-photo.png'
					ratingAverage='5.0'
					ratingNumber='30'
					cardText='Learn wedding photography'
					cardPrice='125'
				/>

				<Card
					imgName='mountain-biking.png'
					ratingAverage='4.8'
					ratingNumber='2'
					cardText='Group Mountain Biking'
					cardPrice='50'
				/>
			</div>
		</div>
	);
}