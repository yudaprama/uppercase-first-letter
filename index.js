export default (value: string) => {
	if (value) {
		return value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
	} else {
		return ""
	}	
}