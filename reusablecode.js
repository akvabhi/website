1. // String to array

if(typeof(worksheet[0][5]) == "string" )
{
worksheet.forEach(function(row){
row[5] = row[5].split('-').join('');
});
}

2. // Sorting by value_dates

typeof(worksheet[0][5]) == "string" ? console.log('Parsed as string') : console.log('Parsed as number')
if (typeof(worksheet[0][5]) == "string") {
worksheet.sort((a,b) => new moment(a[5]).format('YYYYMMDD') - new moment(b[5]).format('YYYYMMDD'))
} else {
worksheet.sort((a,b) => a[5] > b[5])
}

// If date is array of D,M,Y

data.transactions.sort(function(a,b){
if(a.date[0] != b.date[0]){
return a.date[0] - b.date[0];
}else{
if(a.date[1] != b.date[1]){
return a.date[1] - b.date[1];
}else{
return a.date[2] - b.date[2];
}
}
})

3. // easy convert to string
num.toString() === num + ""

4. // timestamp
moment().unix() you will get a unix timestamp
moment().valueOf() you will get a full timestamp

5. // pop,join,split chaining
use slice(0,-1) instead of pop() as slice returns a copy of the array while pop returns the last element.
you can use the chain method with pop when you expect the last item to be what you want.

6. // save loan logs into file using template

// Code to render statement in html file on localhost

var filePath = global.Config.uploadDirPath + "temp.html"
var regex = /                /g;
console.log(ejs.render(html,objectname));
fs.writeFileSync(filePath,ejs.render(html,objectname).replace(regex, ''));


// Save logs without template
var filePath = global.Config.uploadDirPath + "temp.html"
fs.writeFile(filePath, data, (err) => {if (err) throw err});

//eg

var myData = JSON.stringify(data);
var filePath = global.Config.uploadDirPath + "temp2.json"
console.log('\n----------Creating temp2.json------------------');
fs.writeFileSync(filePath,myData,(err) => { if (err) throw err;});

// save into diffenrent file each time

var myData = JSON.stringify(results[key]);
var filePath = global.Config.uploadDirPath + `firesults_${new Date().getTime()}.json`;
console.log(`\n----------Creating ${filePath.split('/').pop()}------------------`);
fs.writeFileSync(filePath,myData,(err) => { if (err) throw err;});

// ultimate file logging

var data = {"name":"loanRequest",value:JSON.stringify(loanRequest),"uniqueName":true,"append":true};
var filePath = global.Config.uploadDirPath + `${data.name}_${data.uniqueName ? new Date().getTime() : '1'}.json`;
console.log(`\n----------Creating ${filePath.split('/').pop()}------------------`);
data.append ? require('fs').writeFileSync(filePath,data.value,{flag:'a'},(err) => { if (err) throw err;}):fs.writeFileSync(filePath,data.value,(err) => { if (err) throw err;});


7. // Moment js get first and last day of current month

i) Using moment

// start of month in default (UTC) format
const startOfMonth = moment().startOf('month');
// end of month in specific format
const endOfMonth = moment().endOf('month').format('YYYY-MM-DD hh:mm');

ii) Usind Date

var date = new Date(), y = date.getFullYear(), m = date.getMonth();
var firstDay = new Date(y, m, 1);
var lastDay = new Date(y, m + 1, 0);

firstDay = moment(firstDay).format(yourFormat);
lastDay = moment(lastDay).format(yourFormat);

8. // Proper error handling

.catch(function (error) {
var error_message = "An error occurred while making the repayment. Please try again later."
if(error.data && error.data.message) {
error_message = error.data.message;
}else if(error.message){
error_message = error.message;
}
MessageFactory.error(error_message);
})

9. // Delete first character of a string in Javascript

var s = "0000test"
while(s.charAt(0) === '0')
{
s = s.substr(1); // only this is req for deleting only 1 char
}
This will kill any 0's at the start of the string.'

// Remove the last char

var sillyString = myString.slice(0, -1);

// 1st and last char

var sillyString = myString.substr(1).slice(0, -1);

10. // Stringify and parse

____ ____ _ _ _____ ____ _ _
/ __ \| _ \ | | JSON.stringify | |/ ____|/ __ \| \ | |
| | | | |_) | | | --------------------> | | (___ | | | | \| |
| | | | _ < _ | | <-------------------- _ | |\___ \| | | | . ` |
| |__| | |_) | |__| | JSON.parse | |__| |____) | |__| | |\ |
\____/|____/ \____/ \____/|_____/ \____/|_| \_| `


11. // How to reject in async/await syntax?

.catch(function(error){
// console.log(`CLG : error`, error);
throw error;
});

12. Regex to replace multiple spaces with a single space

.replace(/ +/g, ' ')

.replace(/undefined/g,'').replace(/,,+/g, ',').replace(/ +/g, ' ').replace(/, ,/g,',').trim()
[remove undefined][merge multiple commas to one][merge multiple spaces to one][replace pattern (, ,) with ,][remove trailing space from string]

enclose pattern in / <pattern> /
g -> to replace all occurences in string

12. Riviera.js

// String to array

if(typeof(worksheet[0][5]) == "string" )
{
worksheet.forEach(function(row){
row[5] = row[5].split('-').join('');
});
}

// Sorting by value_dates

typeof(worksheet[0][5]) == "string" ? console.log('Parsed as string') : console.log('Parsed as number')
if (typeof(worksheet[0][5]) == "string") {
worksheet.sort((a,b) => new moment(a[5]).format('YYYYMMDD') - new moment(b[5]).format('YYYYMMDD'))
} else {
worksheet.sort((a,b) => a[5] > b[5])
}

