import './assets/App.css'
import Casillero from './components/Casillero'
import Ronda from './components/Ronda';
import Title from './components/Title'
import Wrapper from './components/wrapper'

function App() {

  return (
		<div className="App">
			<Title />
			<Wrapper>
				<Ronda />
				<Ronda />
			</Wrapper>
		</div>
  );
}

export default App
