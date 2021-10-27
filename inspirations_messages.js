
const inspiringMessage = [
    'Keep your face always toward the sunshine, and shadows will fall behind you.', 
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'Nothing is impossible. The word itself says ‘I’m possible!',
    'There is nothing impossible to they who will try.',
    'When you have a dream, you’ve got to grab it and never let go',
    'The bad news is time flies. The good news is you’re the pilot.',
    'Life has got all those twists and turns. You’ve got to hold on tight and off you go.',
    'You define your own life. Don’t let other people write your script.',
    'You are never too old to set another goal or to dream a new dream.',
    'You can be everything. You can be the infinite amount of things that people are.',
    'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.',
    'Belief creates the actual fact.',
    'I’m not going to continue knocking that old door that doesn’t open for me. I’m going to create my own door and walk through that.',
    'It is during our darkest moments that we must focus to see the light.',
    'When life gives you lemons, squirt someone in the eye.',
    'Just don’t give up trying to do what you really want to do. Where there is love and inspiration, I don’t think you can go wrong.',
    'Everyone has inside of him a piece of good news. The good news is that you don’t know how great you can be! How much you can love! What you can accomplish! And what your potential is!',
    'We must let go of the life we have planned, so as to accept the one that is waiting for us.',
    'Find out who you are and be that person. That’s what your soul was put on this earth to be. Find that truth, live that truth, and everything else will come.',
    'Nobody built like you, you design yourself.',
    'Wake up determined, go to bed satisfied.',
    'Live your beliefs and you can turn the world around.',
    'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    'When it comes to luck, you make your own.',
    'Be happy – it drives people crazy.',
    'We are not our best intentions. We are what we do.',
    'When you’ve seen beyond yourself, then you may find, peace of mind is waiting there.',
    'Don’t be afraid. Because you’re going to be afraid. But remember when you become afraid, just don’t be afraid.',
    'Definitions belong to the definers, not the defined.',
    'Whatever you think the world is withholding from you, you are withholding from the world.',
    'Work until your bank account looks like a phone number.',
    'Perfection is not attainable, but if we chase perfection we can catch excellence.',
    'It ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward.',
];


let alreadySelected = null;
let loopRange = 3;

for(i = 0; i < loopRange; i++){
    let random_message_position = Math.floor(Math.random()*inspiringMessage.length);
    if (alreadySelected != random_message_position) {
        alreadySelected = random_message_position;
        const random_inspiring_message = inspiringMessage[random_message_position];
        console.log(random_inspiring_message, "\n");    
    } else {
        loopRange = loopRange + 1;
    }
};
