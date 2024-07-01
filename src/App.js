import './App.scss';
import Clock from './components/Clock';
import Header from './components/Header';
import Meals from './components/Meals';
import RegisterForm from './components/RegisterForm';

function App() {
	return (
		<>
			<Header />
			{/* <RegisterForm /> */}
			{/* <Clock /> */}
			<Meals />
		</>
	);
}

export default App;
