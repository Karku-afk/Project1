const dateFormattedET =function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	let yearNow =  timeNow.getFullYear();
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	return dateNow + ". " + monthNamesET[monthNow] + " " + yearNow;
}
function addLeadZero(numValue){
	if(numValue < 10) {
		numValue = "0" + numValue;
		//numValue = numValue.padStart (2, "0");
	}
	return numValue
}

function timeFormattedET(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds ();
	let timeFormatted = hourNow + ":" + addLeadZero(minuteNow) + addLeadZero(secondNow);
	return timeFormatted;
}

//ekspordin kõik vajalikud funktsioonid koos mugavate nimedega
module.exports ={time: timeFormattedET, date: dateFormattedET};