import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data'

export default function App() {
	const cardList = cardData.map(data => {
		return (
			<Card
				key={data.id}
				imgName={data.imgName}
				ratingAverage={data.ratingAverage}
				ratingNumber={data.ratingNumber}
				cardText={data.cardText}
				cardPrice={data.cardPrice}
				openSpots={data.openSpots}
				location={data.location}
			/>
		)
	})

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<div className="card-carousel">
				{cardList}
			</div>
		</div>
	);
}