const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			darkMode: true
		},
		actions: {
			changeDarkMode: () => {
				setStore({darkMode: !getStore().darkMode})
				if(getStore().darkMode) {
					document.body.classList.add('bg-gray-700')
					document.body.classList.remove('bg-gray-300')
				} else {
					document.body.classList.add('bg-gray-300')
					document.body.classList.remove('bg-gray-700')
				}
			},
		}
	};
};

export default getState;