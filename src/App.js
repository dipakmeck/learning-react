import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Clock from './components/Clock';
import Header from './components/Header';
import Meals from './components/Meals';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { UserProvider } from './context/User';

function App() {
	return (
		<>
			<Header />
			{/* <RegisterForm /> */}
			{/* <Clock /> */}
			{/* <Meals /> */}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about-me' element={<About />} />
				<Route path='/contact-me' element={<Contact />} />
			</Routes>
		</>
	);
}

function Root() {
	return (
		<UserProvider>
			<App />
		</UserProvider>
	);
}

export default Root;
