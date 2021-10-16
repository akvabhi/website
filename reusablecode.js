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
you can use the chain method with pop when you expect the last item to be what you want.''
