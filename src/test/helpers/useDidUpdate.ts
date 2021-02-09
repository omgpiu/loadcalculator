import {useEffect, useRef} from "react";

export const useDidUpdate = (callback: () => void, deps?: any) => {

	const hasMount = useRef(false)

	useEffect(() => {
		if(hasMount.current) {
			callback()
		} else {
			hasMount.current = true
		}
	}, [deps])
};

// примеры использования

/*function App1 () {
	useDidUpdate(() => {
		doStuff()
	})
};*/

/*
function App2 () {
	const [count, setCount] = useState(0)

	useDidUpdate(() => {
		doStuffIfCountUpdates()
	}, [count])
};*/
