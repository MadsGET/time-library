const time =
{
	days:
		[
			{ name: 'Monday',		id: 1 },
			{ name: 'Tuesday',		id: 1 },
			{ name: 'Wednesday',	id: 1 },
			{ name: 'Thursday',		id: 1 },
			{ name: 'Friday',		id: 1 },
			{ name: 'Saturday',		id: 1 },
			{ name: 'Sunday',		id: 1 },
		],

	months:
		  [
			{ name: 'January',		id: 1,	length: 31 },
			{ name: 'Feburary',		id: 2,	length: 31 },
			{ name: 'March',		id: 3,	length: 31 },
			{ name: 'April',		id: 4,	length: 31 },
			{ name: 'May',			id: 5,	length: 31 },
			{ name: 'June',			id: 6,	length: 31 },
			{ name: 'July',			id: 7,	length: 31 },
			{ name: 'August',		id: 8,	length: 31 },
			{ name: 'September',	id: 9,	length: 31 },
			{ name: 'October',		id: 10,	length: 31 },
			{ name: 'November',		id: 11,	length: 31 },
			{ name: 'December',		id: 12,	length: 31 },
		  ],

	// Returns minutes as hour and minutes.
	convertMinutes(value) {
		let converted = value / 60;
		let hours = Math.floor(converted);
		let minutes = Math.round((converted - hours) * 60);
		return { hours: hours, minutes: minutes };
	},

	// Formats an integer to time format.
	formatNumber(int) {
		return (int < 10) ? '0' + int : String(int);
	},

	// Checks if a year is leap year.
	isLeapYear(year)
	{
		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	},

	// Readable clock format. (Ex: 8:36pm)
	createAnalogTimeString()
	{
		// Clock time
		let time = new Date().toLocaleTimeString('en');
		let timeSuffix = time.slice(8, 11).toLocaleLowerCase();
		return time.substring(0, time.length -6) + timeSuffix;
	},

	// Creates a simple time stamp (ex: 0130).
	createTimestamp(date)
	{
		let hours = mathf.time.formatNumber(date.getHours());
		let minutes = mathf.time.formatNumber(date.getMinutes());
		return hours + minutes;
	},

	// Creates a simple date stamp (ex: Year-Month-Day).
	createDatestamp()
	{
		return new Date().toISOString().substring(0, 10);
	},
}