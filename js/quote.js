const arrayOfQuotes = [
    {'author': 'The Black Knight',
        'quote': 'It\'s just a flesh wound!',
        'movie': 'Monty Python and the Holy Grail'},

    {'author': 'Dr. Evil',
        'quote': 'We get the warhead and we hold the world ransom for ... one million dollars.',
        'movie': 'Austin Powers: International Man of Mystery'},

    {'author': 'Ron Burgundy',
        'quote': 'I\'m very important. I have many leather-bound books, and my apartment smells of rich mahogany.',
        'movie': 'Anchorman: The Legend of Ron Burgundy'},

    {'author': 'Damian Leigh',
        'quote': 'She doesn\'t even go here!',
        'movie': 'Mean Girls'},

    {'author': 'Tony Stark',
        'quote': 'Doth mother know you wearith her drapes?',
        'movie': 'The Advengers'},

    {'author': 'Kevin McCallister',
        'quote': 'Ahhhhhh!',
        'movie': 'Home Alone'},

    {'author': 'Blind Al',
        'quote': 'Love is blind, Wade.',
        'movie': 'Deadpool'},

    {'author': 'Jessica Rabbit',
        'quote': 'I’m not bad. I’m just drawn that way.',
        'movie': 'Who Framed Roger Rabbit'},

    {'author': 'Annie Walker',
        'quote': 'Help me, I\'m poor.',
        'movie': 'Bridesmades'},

    {'author': 'Shelly Darlingson',
        'quote': 'Instead of the mahi mahi, may I just get the one mahi because I\'m not that hungry.',
        'movie': 'House Bunny'},

    {'author': 'Captain Jack Sparrow',
        'quote': 'But, why is the rum gone?',
        'movie': 'Pirates of the Caribbean: The Curse of the Black Pearl'},

    {'author': 'Wednesday Addams',
        'quote': 'Are they made from real Girl Scouts?',
        'movie': 'The Addams Family'},

    {'author': 'Shaggy Rogers',
        'quote': 'Like that is my favorite name.',
        'movie': 'Scooby Doo'},

    {'author': 'Dale Doback',
        'quote': 'Is he dead?',
        'movie': 'Step Brothers'},

    {'author': 'Michelle Flaherty',
        'quote': 'This one time, at band camp...',
        'movie': 'American Pie'},

    {'author': 'Edna Mode',
        'quote': 'No capes!',
        'movie': 'The Incredibles'},

    {'author': 'Mr. Potato Head',
        'quote': 'Did you all take stupid pills this morning?',
        'movie': 'Toy Story'},

    {'author': 'Derek Zoolander',
        'quote': 'Did you ever think that maybe there\'s more to life than being really, really, really ridiculously good looking?',
        'movie': 'Zoolander'},

    {'author': 'Groot',
        'quote': 'I am Groot!',
        'movie': 'Groot'},
];

// print (random) output onto page
function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quote').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#author').textContent = `- ${arrayOfQuotes[random].author}`;
    document.querySelector('#movie').textContent = `${arrayOfQuotes[random].movie}`;
}