var quotes = [
    //Vegetius Quotes
    'An adversary is more hurt by desertion than by slaughter. - Vegetius',
    'What can a soldier do who charges when out of breath? - Vegetius',
    'Few men are born brave, many become so through training and force of discipline. - Vegetius',
    'Valour is superior to numbers. - Vegetius',
    'An ambuscade, if discovered and promptly surrounded, will repay the intended mischief with interest. - Vegetius',
    'A general is not easily overcome who can form a true judgement of his own and the enemies forces. - Vegetius',
    'Qui desiderat pacem praeparet bellum, Let him who desires peace prepare for war - Vegetius',
    'We die today not only for our friends and family but for our gods and for our forefathers and men before them so pray to them to make us victorious. - Vegetius',
    'Let all be present and expect the palm, the prize of victory. - Virgil',

    //Homer Quotes
    'So ends the bloody business of the day. - Homer',
    'Even the bravest cannot fight beyond his strength. - Homer',
    'Men grow tired of sleep, love, singing and dancing sooner than war. - Homer',
    'He serves me most, who serves his country best. - Homer',
    'The blade itself incites to violence. - Homer',
    'To those that flee comes neither power nor glory. - Homer',
    'Ye gods, what dastards would our host command? Swept to the war, the lumber of the land. - Homer',
    'Noble and manly music invigorates the spirit, strengthens the wavering man, and incites him to great and worthy deeds. - Homer',
    'A glorious death is his who for his country falls. - Homer',

    //Plautus Quotes
    'Conquered, we conquer. - Plautus',
    'Ah, yes, mere infantry - poor beggars... - Plautus',
    'The valiant profit more their country than the finest, cleverest speakers. - Plautus',

    //Gaius Julius Caesar
    'In war important events result from trivial causes. - Gaius Julius Caesar',
    'War gives the right of the conquerors to impose any conditions they please upon the vanquished. - Gaius Julius Caesar',
    'Veni, vidi, vici. I came, I saw, I conquered. - Gaius Julius Caesar',
    'Alea iacta est The die is cast. - Gaius Julius Caesar',
    'If you must break the law, do it to seize power, in all other cases observe it. - Gaius Julius Caesar'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}

let btn = document.querySelector('.add') //button add

btn.addEventListener('click', () => {
    let add = prompt("Enter a new quote","")
    if (add) {
        quotes.push(add)
    }
})

let btn1 = document.querySelector('.remove') //button remove

btn1.addEventListener('click', () => {
    quotes.pop()
})
