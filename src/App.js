import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data'

export default function App() {
	const cardList = cardData.map(data => {
		return (
			<Card 
				imgName={data.imgName}
				ratingAverage={data.ratingAverage}
				ratingNumber={data.ratingNumber}
				cardText={data.cardText}
				cardPrice={data.cardPrice}
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