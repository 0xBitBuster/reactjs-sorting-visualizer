export function awaitTimeout(timeout) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, timeout)
	})
}