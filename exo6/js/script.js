const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

const sentencesToShow = [];
for (const key in details) {
    sentencesToShow.push(`${key} ${details[key]}`);
}
console.log(sentencesToShow.join(' '));