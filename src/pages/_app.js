/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Custom App
*/

import { useEffect, useState } from 'react';
import { saveTheme } 	from 'theme';
import { ThemeContext } from 'theme/context';
import 'sass/style.scss';

const App = ({ Component, pageProps }) => { 

	/**
	 * @description Create the global container for theme handling
	*/
	const [theme, setTheme] = useState('dark');
	const toggleTheme = theme => setTheme(theme);


	useEffect(() => {

		const localTheme = window.localStorage.getItem('theme');

		if (!localTheme) {

			toggleTheme(saveTheme('dark'));

		} else {

			toggleTheme(saveTheme('light'));

		}

	}, []);


	return(
		<ThemeContext.Provider value = {{ theme, setTheme: toggleTheme }}>
			<Component { ...pageProps } />
		</ThemeContext.Provider>
	);

};

export default App;