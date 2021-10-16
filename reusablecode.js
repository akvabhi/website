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

13. Compare two arrays

var arr1 = [7720,765,762,759,757,755,753,568,502,482,427,407,403,402,395,390,385,376,374,369,368,352,351,263,262,259,257,253,251,250,246,239,238,237,235,234,2324,232,231,2299,229,228,227,2250,2246,2245,2235,2234,2232,211,195,194,192,189,183,182,181,167,162,159,158,155,14950,149,1438,1402,1392,1391,118];
var arr2 = [118,1391,1392,1402,1438,149,14950,155,158,159,162,167,181,182,183,189,192,194,195,211,2232,2234,2235,2245,2246,2250,227,228,229,2299,231,232,2324,234,235,237,238,239,246,250,251,253,257,259,262,263,351,352,368,369,374,376,385,390,395,402,403,407,427,482,502,568,753,755,757,759,762,765,772];
//check lengths

function areEqual(arr1,arr2){
var len1 = arr1.length;
var len2 = arr2.length;
console.log('arr1.length : '+arr1.length+'& arr2.length : '+arr2.length);
if(arr1.length == arr2.length){
console.log('Equal Lengths');
arr1.sort();
arr2.sort();
console.log(arr1);
console.log(arr2);
var flag = true;
for(var i= 0;i<arr1.length;i++){
if(arr1[i] !== arr2[i]){
console.log('Different elements found at index :'+i);
console.log('arr1[i] : '+arr1[i]+' & arr2[i] : '+arr2[i]);
flag = false;
break;
}
}
if(flag){
console.log('Order of elements is same');
}
}else{
console.log('Unequal lengths');
console.log(arr_diff(arr1,arr2));
}
}
areEqual(arr1,arr2);

function arr_diff(a1, a2) {
var a = [], diff = [];
for (var i = 0; i < a1.length; i++) {
a[a1[i]] = true;
}
for (var i = 0; i < a2.length; i++) {
if (a[a2[i]]) {
delete a[a2[i]];
} else {
a[a2[i]] = true;
}
}
for (var k in a) {
diff.push(k);
}
return diff;
}

14. CRON job schedule format

The Cron time string is five values separated by spaces, based on the following information:
(For Indian time, assume 5:30 is automatically added to whatever you schedule)
Character Descriptor Acceptable values
1 Minute 0 to 59, or * (no specific value)
2 Hour 0 to 23, or * for any value. All times UTC.
3 Day of the month 1 to 31, or * (no specific value)
4 Month 1 to 12, or * (no specific value)
5 Day of the week 0 to 7 (0 and 7 both represent Sunday), or * (no specific value)

Note that entering a value for a character attribute configures a task to run at a regular time. If you append a slash ( / )
and an integer to a wildcard in any of the character positions however, you can configure the cron task to run at a regular interval that isn't dependent
on a regular time (for example, every X minutes/hours/days)./

i.e.
// only once per hour
30 * * * * Execute a command at 30 minutes past the hour, every hour.
// multiple times per hour
*/5 * * * * Execute a command every five minutes./

More Info : https://www.thegeekstuff.com/2009/06/15-practical-crontab-examples


