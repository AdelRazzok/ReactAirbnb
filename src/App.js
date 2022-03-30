import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data'

export default function App() {
	const cardList = cardData.map(data => {
		return (
			<Card
				key={data.id}
				data={data}
				// {...data} Is good too, but less precise
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