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

15. toFixed(2) not a function.

Try Number(value).toFixed(2)

16. cron job

You can also check a cron job command by hitting from terminal

17. To log order of execution of files
console.log(moment().format('h:mm:ss a'));

18. To convert $200,900,999.00 to 200900999
amount.slice(1).replace(/,/g, '').split('.',1)[0];
slice -> remove $
replace -> remove commas
split -> split by . and only take 1st part

19. [SQL] Update json field at 1st level (row->primary_contact->>email)

update business_entity set primary_contact = jsonb_set(primary_contact, '{email}', '"abhishek.kumar@indifi.com"')
where id in ('5e769aec-f7f3-463a-9023-fa23ed869227');

update agencies set emails = jsonb_set(emails, '{to}', '["support@archiagency.com","abd@archiagency.com"]')
where id in ('6a146a04-02e0-4bab-b52c-ea848badf2cd');

20. Regex added to money

var num = 23456567789.00;
console.log(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) // International
console.log(num.toString().replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")) // Indian

21. launch.json

{
"version": "0.1.0",
"configurations": [
{
"name": "Debug All",
"type": "node2",
"program": "${workspaceRoot}/debugall.js",
"stopOnEntry": false,
"args": [],
"cwd": "${workspaceRoot}/",
"runtimeExecutable": null,
"runtimeArgs": [
"--nolazy"
],
"env": {
"NODE_ENV": "development",
"LOGSQL": "false",
"USE_COMPRESSION": "false",
},
"sourceMaps": false,
"outDir": null,
"console": "internalConsole"
}
]
}

22. Regex for 6 consecutive numbers
console.log(str.replace(/\d{6}/, ""));

23. split string by comma or space

str.split(/[ ,]+/).filter(Boolean);
// .filter is used to remove empty elements due to trailing comma at the end

24. Check if an array is empty or not in JavaScript

typeof emptyArray != "undefined" && emptyArray != null && emptyArray.length != null && emptyArray.length > 0

Array.isArray(emptyArray) && emptyArray.length

25. Remove duplicate objects from array

uniqueArray = Array.from(new Set(books.map(JSON.stringify))).map(JSON.parse);

26. Set default value of objects

<script>
var drawDiv = function(config){

var defaultValues = {
height: 100,
width: 100,
margin: 10,
padding: 10
};

config = Object.assign(defaultValues,config)
console.log(config)
}

drawDiv({margin:0, padding: 0 })

</script>JavaScriptCopy

The Syntax for Object.assign():

Object.assign(target, ...sources) // returns target object

27. fileLog

// with stringify only

function fileLog(data) {
// fileLog({name:'result',value:result,stringify:true,uniqueName:true,ext:'json',append:false,force:true,showerr:true,})
let fs = require('fs');
let defaultValues = {
name: 'data',
stringify: true,
ext: "json",
uniqueName: false,
append: false,
showerr: true,
force: false
}

data = Object.assign(defaultValues, data);

// console.log(data);
let filePath = global.Config.uploadDirPath + `${data.name}${data.uniqueName ? new Date().getTime() : ''}.${data.ext}`;
console.log(`\n----------Creating ${filePath.split('/').pop()}------------------`);

var value;
if (data.stringify) {
if (!data.force) {
try {
value = JSON.stringify(data.value);
} catch (e) {
try {
if (data.showerr)
console.log(`fileLog -> e`, e);
value = data.value;
} catch (e2) {
throw e2
}
}
} else {
value = JSON.stringify(data.value);
}
} else {
value = data.value;
}
if (data.append) {
fs.writeFileSync(filePath, value, {
flag: 'a'
}, (err) => {
if (err) {
if (showerr) console.log(`[append] fileLog -> err`, err);
throw err;
}
})
} else {
fs.writeFileSync(filePath, value, (err) => {
if (err) {
if (showerr) console.log(`fileLog -> err`, err);
throw err;
}
});
}
}

// with circular
// https://github.com/moll/json-stringify-safe

function fileLog(data) {

// fileLog({name:'result',value:result,stringify:true,uniqueName:true,ext:'json',append:false,force:true,showerr:true,})

let fs = require('fs');
let defaultValues = {
name: 'data',
stringify: true,
ext: "json",
uniqueName: false,
append: false,
showerr: true,
force: false
}

data = Object.assign(defaultValues, data);

// console.log(data);
let filePath = global.Config.uploadDirPath + `${data.name}${data.uniqueName ? new Date().getTime() : ''}.${data.ext}`;
console.log(`\n----------Creating ${filePath.split('/').pop()}------------------`);

var value;
if (data.stringify) {
if (!data.force) {
try {
value = JSON.stringify(data.value);
} catch (e) {
try {
if (data.showerr)
console.log(`fileLog -> e`, e);
// value = data.value;
value = circular(data.value, null, 2);
} catch (e2) {
try {
if (data.showerr)
console.log(`fileLog -> e2`, e2);
value = data.value;
} catch (e3) {
throw e3;
}
}
}
} else {
value = JSON.stringify(data.value);
}
} else {
value = data.value;
}
if (data.append) {
fs.writeFileSync(filePath, value, {
flag: 'a'
}, (err) => {
if (err) {
if (showerr) console.log(`[append] fileLog -> err`, err);
throw err;
}
})
} else {
fs.writeFileSync(filePath, value, (err) => {
if (err) {
if (showerr) console.log(`fileLog -> err`, err);
throw err;
}
});
}

function circular(obj, replacer, spaces, cycleReplacer) {
return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}
function serializer(replacer, cycleReplacer) {
var stack = [],
keys = []

if (cycleReplacer == null) cycleReplacer = function (key, value) {
if (stack[0] === value) return "[Circular ~]"
return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
}

return function(key, value) {
if (stack.length > 0) {
var thisPos = stack.indexOf(this)
~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
}
else stack.push(value)

return replacer == null ? value : replacer.call(this, key, value)
}
}

}

28. Curl put Request

curl -X PUT -H "Content-Type: application/json" -d '{"name":"mkyong","email":"abc@gmail.com"}' http://localhost:8080/user/100

29. [SQL] Get all keys in json field in postgres

select jsonb_object_keys(json_stuff) from table;

30. Template Strings Don't Pretty Print Objects'
To use objects either stringify them first or the object will be shown as [object Object]

31. Clone object and delete key
var clone = Object.assign({}, {a: 1, b: 2, c: 3});
delete clone.b;

32. run method in js file directly from terminal
node -e 'require("./fileName")' -> this is module.exports

33. [TIL]

If we comment oAuth then req.user comes undefined
req.body -> usually comes from form filled in the UI
If timeout is occuring and all promises are correctly returning then change RabbitMQ.rpc to RabbitMQ.pushToQueue
Socket error/ECONNECT (like in sending mail etc) is usually due to internet problem (no internet,firewal,antivirus,no vpn etc)

34. [SQL]

To use the result if the json column contains a given key.
fv.details ? 'application_communication_id'

35. Using logger
let logger = Logger.getInstance({"api": "/cron-jobs/:code/invoke"});
It can have keys like data,task,activityCode etc

37. [Snippet] Define object key if not exists
var test = {};
test.hello = test.hello || {};

38. [Snippet] dummy promise to feed hardcoded value to .then chain
(can remove return from beggining)
return new Promise((resolve, reject) => {
var result = {};
resolve(result);
})

39. Hitting Prod function from localhost

// we can't run insert/update based flow using technew

var options = {
// url: 'http://localhost:3002/fi/hold', // https://api.indifi.com/
url: 'https://api.indifi.com/fi/hold',
method: 'POST',
headers: {
// 'Authorization' : 'Bearer 4be3a8b606f971da9aef39e7266038c541c7f065', // Authorization : Bearer token // stg-dad 'Bearer b7f812ec77cc664ddbdd18b79ebadbb5c53da9d0'
'Authorization' : 'Bearer b132bb6723faf31a0faecf24118708ee770de120',
'Content-Type': 'application/x-www-form-urlencoded'//application/json; charset=utf-8
},
body: querystring.stringify({
'appId': obj.appId,
'verificationId' : typeof obj.verificationId == 'object' ? obj.verificationId : [obj.verificationId],
'reason' : "Due to lockdown we are putting this case on hold. Once this is over we will re-initiate it again."
})
};
request(options, (error, response, body) => {
try {
if (error) {
console.log(`CLG : error`, error);
console.log(`CLG : error.stfy `, JSON.stringify(error));
// deferred.reject(error);
} else if (response && response.statusCode !== 201 && response.statusCode !== 200) {
console.log(`CLG : response`, response);
console.log(`CLG : response.statusCode`, response.statusCode);
//deferred.reject(new Error(body));
// deferred.reject("{}");
} else {
body = JSON.parse(body);
console.log(`CLG : body`, body);
// deferred.resolve(body.response);
}
} catch (exception) {
console.log(`CLG : exception`, exception);
// deferred.reject(exception);
}
});

40. Accept all linked in requests

https://www.linkedin.com/mynetwork/invitation-manager/?invitationType=CONNECTION
var x = document.getElementsByClassName('invitation-card__action-btn artdeco-button artdeco-button--2 artdeco-button--secondary ember-view'); for (var i=0 ; i<x.length; i++) x[i].click();

41. [SQL] report for last 6 months
where created_at + interval '6 months'> now()

42. Creating Password Protected Zip Files in Mac
zip -er NAMEOFZIPFILE.zip path/of/folder

