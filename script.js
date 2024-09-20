// Welcome to Random Quotes Generator PH
document.addEventListener("DOMContentLoaded", function () {
  const quotes = {
    life: [
      // Life
      {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
      },
      {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
      },
      {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
      },
      { text: "Get busy living or get busy dying.", author: "Stephen King" },
      {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy",
      },
      {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
      },
      {
        text: "The biggest adventure you can take is to live the life of your dreams.",
        author: "Oprah Winfrey",
      },
      {
        text: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
      },
      {
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
      },
      {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
      },
      {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
      },
      {
        text: "Life is short, and it is up to you to make it sweet.",
        author: "Sarah Louise Delany",
      },
      {
        text: "Life is a journey that must be traveled no matter how bad the roads and accommodations.",
        author: "Oliver Goldsmith",
      },
      {
        text: "The good life is one inspired by love and guided by knowledge.",
        author: "Bertrand Russell",
      },
      {
        text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
      },
      {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
      },
      {
        text: "You can't go back and change the beginning, but you can start where you are and change the ending.",
        author: "C.S. Lewis",
      },
      {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
      },
      {
        text: "Live in the sunshine, swim the sea, drink the wild air.",
        author: "Ralph Waldo Emerson",
      },
      {
        text: "Life is a daring adventure or nothing at all.",
        author: "Helen Keller",
      },
      {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
      },
      {
        text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson",
      },
      {
        text: "In the end, it's not the years in your life that count. It's the life in your years",
        author: "Abraham Lincoln",
      },
      {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
      },
      {
        text: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
      },
      {
        text: "Life itself is the most wonderful fairy tale.",
        author: "Hans Christian Andersen",
      },
      { text: "The unexamined life is not worth living.", author: "Socrates" },
      { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
      {
        text: "Don't settle for what life gives you; make life better and build something.",
        author: "Ashton Kutcher",
      },
      {
        text: "Life is short, and it is up to you to make it sweet.",
        author: "Sarah Louise Delany",
      },
      {
        text: "Life is what we make it, always has been, always will be.",
        author: "Grandma Moses",
      },
      {
        text: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain",
      },
      {
        text: "Life is ten percent what happens to us and ninety percent how we respond to it.",
        author: "Charles R. Swindoll",
      },
      { text: "Keep calm and carry on.", author: "Winston Churchill" },
      {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
      },
      {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy",
      },
      {
        text: "Believe that life is worth living and your belief will help create the fact.",
        author: "William James",
      },
      {
        text: "The good life is one inspired by love and guided by knowledge.",
        author: "Bertrand",
      },
    ],
    love: [
      // Love
      {
        text: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare",
      },
      {
        text: "The best thing to hold onto in life is each other.",
        author: "Audre Lorde",
      },
      {
        text: "You are my sun, my moon, and all my stars.",
        author: "e. e. cummings",
      },
      {
        text: "To love and be loved is to feel the sun from both sides.",
        author: "David Viscott",
      },
      {
        text: "Love is composed of a single soul inhabiting two bodies.",
        author: "Aristotle",
      },
      {
        text: "In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.",
        author: "Jane Austen",
      },
      {
        text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
        author: "Gabriel Garcia Marquez",
      },
      {
        text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
        author: "Victor Hugo",
      },
      {
        text: "Love does not dominate; it cultivates.",
        author: "Johann Wolfgang von Goethe",
      },
      {
        text: "There is only one happiness in this life, to love and be loved.",
        author: "George Sand",
      },
      {
        text: "Love is when the other person's happiness is more important than your own.",
        author: "H. Jackson Brown Jr.",
      },
      {
        text: "To love someone is to see a miracle invisible to others.",
        author: "Francois Mauriac",
      },
      {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
      },
      {
        text: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë",
      },
      { text: "Love is a friendship set to music.", author: "Joseph Campbell" },
      {
        text: "The heart has its reasons which reason knows not.",
        author: "Blaise Pascal",
      },
      {
        text: "Love is a canvas furnished by nature and embroidered by imagination.",
        author: "Voltaire",
      },
      {
        text: "When I saw you I fell in love, and you smiled because you knew.",
        author: "Arrigo Boito",
      },
      { text: "The best proof of love is trust.", author: "Joyce Meyer" },
      { text: "We are most alive when we're in love.", author: "John Updike" },
      {
        text: "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.",
        author: "Rabindranath Tagore",
      },
      {
        text: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare",
      },
      {
        text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        author: "Lao Tzu",
      },
      {
        text: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn",
      },
      {
        text: "Love is composed of a single soul inhabiting two bodies.",
        author: "Aristotle",
      },
      { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
      {
        text: "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds.",
        author: "Nicholas Sparks",
      },
      {
        text: "To love and be loved is to feel the sun from both sides.",
        author: "David Viscott",
      },
      {
        text: "Love is a better teacher than duty.",
        author: "Albert Einstein",
      },
      { text: "True love stories never have endings.", author: "Richard Bach" },
      {
        text: "Love is when the other person's happiness is more important than your own.",
        author: "H. Jackson Brown, Jr.",
      },
      {
        text: "To love oneself is the beginning of a lifelong romance.",
        author: "Oscar Wilde",
      },
      {
        text: "In love there are two things: bodies and words.",
        author: "Joyce Carol Oates",
      },
      {
        text: "Love is that condition in which the happiness of another person is essential to your own.",
        author: "Robert A. Heinlein",
      },
      {
        text: "The way to love anything is to realize that it may be lost.",
        author: "G.K. Chesterton",
      },
      {
        text: "Love is not only something you feel, it is something you do.",
        author: "David Wilkerson",
      },
      {
        text: "We are shaped and fashioned by what we love.",
        author: "Johann Wolfgang von Goethe",
      },
      {
        text: "Love is the flower you've got to let grow.",
        author: "John Lennon",
      },
      { text: "The best proof of love is trust.", author: "Joyce Brothers" },
      {
        text: "Love is friendship that has caught fire.",
        author: "Ann Landers",
      },
      {
        text: "Love doesn't make the world go round. Love is what makes the ride worthwhile.",
        author: "Franklin P. Jones",
      },
      {
        text: "There is no remedy for love but to love more.",
        author: "Henry David Thoreau",
      },
      {
        text: "Love is a canvas furnished by nature and embroidered by imagination.",
        author: "Voltaire",
      },
      {
        text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
        author: "Maya Angelou",
      },
      {
        text: "We loved with a love that was more than love.",
        author: "Edgar Allan Poe",
      },
      {
        text: "The greatest thing you'll ever learn is just to love and be loved in return.",
        author: "Eden Ahbez",
      },
      {
        text: "A loving heart is the truest wisdom.",
        author: "Charles Dickens",
      },
      {
        text: "At the touch of love, everyone becomes a poet.",
        author: "Plato",
      },
      {
        text: "If you find someone you love in your life, then hang on to that love.",
        author: "Princess Diana",
      },
      {
        text: "The only thing we never get enough of is love; and the only thing we never give enough of is love.",
        author: "Henry Miller",
      },
      {
        text: "The giving of love is an education in itself.",
        author: "Eleanor Roosevelt",
      },
      {
        text: "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
        author: "Anonymous",
      },
      {
        text: "Love is a promise; love is a souvenir, once given never forgotten, never let it disappear.",
        author: "John Lennon",
      },
      {
        text: "To love another person is to see the face of God.",
        author: "Victor Hugo",
      },
      {
        text: "Love is like the wind, you can't see it but you can feel it.",
        author: "Nicholas Sparks",
      },
      {
        text: "Love isn't something you find. Love is something that finds you.",
        author: "Loretta Young",
      },
      {
        text: "The best thing to hold onto in life is each other.",
        author: "Audrey Hepburn",
      },
      {
        text: "Love is the only force capable of transforming an enemy into a friend.",
        author: "Martin Luther King, Jr.",
      },
      {
        text: "A flower cannot blossom without sunshine, and man cannot live without love.",
        author: "Max Muller",
      },
      {
        text: "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.",
        author: "Rabindranath Tagore",
      },
      {
        text: "I have decided to stick with love. Hate is too great a burden to bear.",
        author: "Martin Luther King, Jr.",
      },
    ],
    motivation: [
      // Motivation
      {
        text: "If you are born poor it's not your mistake, but if you die poor it's your mistake.",
        author: "Bill Gates",
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
      },
      {
        text: "If you are changing the world, you are working on important things. You are excited to get up in the morning.",
        author: "Larry Page",
      },
      {
        text: "Obviously everyone wants to be successful, but I want to be looked back on as being very innovative, very trusted and ethical.",
        author: "Sergey Brin",
      },
      {
        text: "Failure is an option here. If things are not failing, you are not innovating enough.",
        author: "Elon Musk",
      },
      {
        text: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
      },
      {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
      },
      {
        text: "It’s very hard to fail completely if you aim high enough.",
        author: "Larry Page",
      },
      {
        text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett",
      },
      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
      },
      {
        text: "Some people don't like change, but you need to embrace change if the alternative is disaster.",
        author: "Elon Musk",
      },
      {
        text: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
        author: "Mark Zuckerberg",
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
      },
      {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
      },
      {
        text: "Solving big problems is easier than solving little problems.",
        author: "Sergey Brin",
      },
      {
        text: "The biggest risk is not taking any risk.",
        author: "Mark Zuckerberg",
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
      },
      {
        text: "We want Google to be the third half of your brain.",
        author: "Sergey Brin",
      },
      { text: "Always deliver more than expected.", author: "Larry Page" },
      {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
      },
      {
        text: "When something is important enough, you do it even if the odds are not in your favor.",
        author: "Elon Musk",
      },
      {
        text: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
      },
      {
        text: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
      },
      {
        text: "Your time is limited, don’t waste it living someone else’s life.",
        author: "Steve Jobs",
      },
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
      },
      {
        text: "In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author: "Mark Zuckerberg",
      },
      {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
      },
      {
        text: "To achieve great things, two things are needed: a plan and not quite enough time.",
        author: "Leonard Bernstein",
      },
      {
        text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr.",
      },
      {
        text: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair",
      },
      {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
      },
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
      },
      {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
      },
      {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
      },
      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
      },
      {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
      },
      {
        text: "It's fine to celebrate success, but it is more important to heed the lessons of failure.",
        author: "Bill Gates",
      },
      {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
      },
      {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
      },
      {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
      },
      {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
      },
      {
        text: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn",
      },
      { text: "The best revenge is massive success.", author: "Frank Sinatra" },
      {
        text: "Opportunities don't happen, you create them.",
        author: "Chris Grosser",
      },
      {
        text: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
      },
      {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
      },
      {
        text: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates",
      },
      {
        text: "Try not to become a man of success. Rather become a man of value.",
        author: "Albert Einstein",
      },
      {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
      },
      {
        text: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale",
      },
      {
        text: "Success is not the absence of failure; it's the persistence through failure.",
        author: "Aisha Tyler",
      },
      {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
      },
      {
        text: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
      },
      {
        text: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        author: "Jim Rohn",
      },
      {
        text: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
        author: "Conrad Hilton",
      },
      {
        text: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
        author: "Colin Powell",
      },
      {
        text: "Don't be distracted by criticism. Remember—the only taste of success some people have is when they take a bite out of you.",
        author: "Zig Ziglar",
      },
      {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
      },
      { text: "I failed my way to success.", author: "Thomas Edison" },
      {
        text: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
      },
      {
        text: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee",
      },
      {
        text: "Don't be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
      },
      {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
      },
      {
        text: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
      },
      {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
      },
      {
        text: "It always seems impossible until it’s done.",
        author: "Nelson Mandela",
      },
      {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
      },
      {
        text: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh",
      },
      {
        text: "Don’t wait for opportunity. Create it.",
        author: "George Bernard Shaw",
      },
    ],

    patriotic: [
      // Patriotic
      { text: "The youth is the hope of our future.", author: "José Rizal" },
      {
        text: "It is better to die fighting than to live without freedom.",
        author: "General Antonio Luna",
      },
      {
        text: "I die without seeing the dawn brighten over my native land. You who have it to see, welcome it—and forget not those who have fallen during the night!",
        author: "José Rizal",
      },
      {
        text: "True love of country is not a matter of empty words and expressions; it is shown through deeds and sacrifices.",
        author: "Emilio Aguinaldo",
      },
      { text: "To die because of you.", author: "Lupang Hinirang" },
      {
        text: "He who does not know how to look back at where he came from will never get to his destination.",
        author: "José Rizal",
      },
      {
        text: "For the salvation of the people, we need an army that is disciplined, hardworking, and ready to sacrifice its life.",
        author: "General Antonio Luna",
      },
      {
        text: "I want to show my countrymen that I am a man who cannot be intimidated by anyone.",
        author: "Andres Bonifacio",
      },
      {
        text: "It is a useless life that is not consecrated to a great ideal. It is like a stone wasted on the field without becoming a part of any edifice.",
        author: "José Rizal",
      },
      {
        text: "I would rather have a government run like hell by Filipinos than a government run like heaven by Americans.",
        author: "Manuel L. Quezon",
      },
      {
        text: "Let us be more noble in everything. Let us not be cowards nor traitors nor scoundrels as others have been, but let us be good, and, above all, be true.",
        author: "José Rizal",
      },
      {
        text: "Ask not what your country can do for you—ask what you can do for your country.",
        author: "John F. Kennedy",
      },
      {
        text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
        author: "Martin Luther King Jr.",
      },
      { text: "Give me liberty, or give me death!", author: "Patrick Henry" },
      {
        text: "Freedom is not demanded, but fought for.",
        author: "General Antonio Luna",
      },
      {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
      },
      {
        text: "Government of the people, by the people, for the people, shall not perish from the Earth.",
        author: "Abraham Lincoln",
      },
      {
        text: "For every soldier who walks, another hero lies.",
        author: "General Antonio Luna",
      },
      {
        text: "The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.",
        author: "Thomas Jefferson",
      },
      {
        text: "My fellow Americans, ask not what your country can do for you, ask what you can do for your country.",
        author: "John F. Kennedy",
      },
      {
        text: "Those who deny freedom to others deserve it not for themselves.",
        author: "Abraham Lincoln",
      },
      {
        text: "If we don't stand up now, when?",
        author: "General Antonio Luna",
      },
      {
        text: "Liberty, when it begins to take root, is a plant of rapid growth.",
        author: "George Washington",
      },
      {
        text: "The wounded hero, as he fights, he is expected to rise again.",
        author: "General Antonio Luna",
      },
      {
        text: "A man may die, nations may rise and fall, but an idea lives on.",
        author: "John F. Kennedy",
      },
      {
        text: "The Philippines is for Filipinos!",
        author: "General Antonio Luna",
      },
      {
        text: "Where liberty dwells, there is my country.",
        author: "Benjamin Franklin",
      },
      {
        text: "Patriotism is the last refuge of the scoundrel.",
        author: "Samuel Johnson",
      },
      {
        text: "In the face of impossible odds, people who love this country can change it.",
        author: "Barack Obama",
      },
      {
        text: "The love of one's country is a splendid thing. But why should love stop at the border?",
        author: "Pablo Casals",
      },
      {
        text: "I am not an Athenian or a Greek, but a citizen of the world.",
        author: "Socrates",
      },
      {
        text: "We cannot win if we are not united.",
        author: "General Antonio Luna",
      },
      {
        text: "I only regret that I have but one life to lose for my country.",
        author: "Nathan Hale",
      },
      {
        text: "We need a type of patriotism that recognizes the virtues of those who are opposed to us.",
        author: "Francis John McConnell",
      },
      {
        text: "The most effective way to destroy people is to deny and obliterate their own understanding of their history.",
        author: "George Orwell",
      },
      {
        text: "This nation will remain the land of the free only so long as it is the home of the brave.",
        author: "Elmer Davis",
      },
      {
        text: "To survive in peace and harmony, united and strong, we must have one people, one nation, one flag.",
        author: "Pauline Hanson",
      },
      {
        text: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.",
        author: "Winston Churchill",
      },
      {
        text: "The price of greatness is responsibility.",
        author: "Winston Churchill",
      },
      {
        text: "Discipline is the soul of the army.",
        author: "General Antonio Luna",
      },
      {
        text: "I have nothing to offer but blood, toil, tears, and sweat.",
        author: "Winston Churchill",
      },
      {
        text: "Patriotism is not enough. I must have no hatred or bitterness towards anyone.",
        author: "Edith Cavell",
      },
      {
        text: "To die for the people is as holy as to die for God.",
        author: "General Antonio Luna",
      },
      {
        text: "God save the Queen!",
        author: "Traditional British Patriotic Song",
      },
      {
        text: "The more we sweat in peace, the less we bleed in war.",
        author: "Vince Lombardi",
      },
      {
        text: "This blessed plot, this earth, this realm, this England.",
        author: "William Shakespeare",
      },
      {
        text: "If we are together nothing is impossible. If we are divided all will fail.",
        author: "Winston Churchill",
      },
      {
        text: "We make a living by what we get, but we make a life by what we give.",
        author: "Winston Churchill",
      },
      {
        text: "Freedom is the sure possession of those alone who have the courage to defend it.",
        author: "Pericles (adapted by Winston Churchill)",
      },
      {
        text: "Swaraj is my birthright, and I shall have it!",
        author: "Bal Gangadhar Tilak",
      },
      {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
      },
      {
        text: "A nation's culture resides in the hearts and in the soul of its people.",
        author: "Mahatma Gandhi",
      },
      { text: "Inquilab Zindabad!", author: "Bhagat Singh" },
      {
        text: "It is blood alone that can pay the price of freedom. Give me blood and I will give you freedom!",
        author: "Subhas Chandra Bose",
      },
      { text: "Jai Hind!", author: "Subhas Chandra Bose" },
      {
        text: "An eye for an eye only ends up making the whole world blind.",
        author: "Mahatma Gandhi",
      },
      {
        text: "Freedom is not worth having if it does not include the freedom to make mistakes.",
        author: "Mahatma Gandhi",
      },
      {
        text: "The best way to find yourself is to lose yourself in the service of others.",
        author: "Mahatma Gandhi",
      },
      {
        text: "A nation's greatness is measured by how it treats its weakest members.",
        author: "Mahatma Gandhi",
      },
      {
        text: "I dream of an Africa which is in peace with itself.",
        author: "Nelson Mandela",
      },
      {
        text: "For to be free is not merely to cast off one’s chains, but to live in a way that respects and enhances the freedom of others.",
        author: "Nelson Mandela",
      },
      {
        text: "The struggle is my life. I will continue fighting for freedom until the end of my days.",
        author: "Nelson Mandela",
      },
      {
        text: "It is better to lead from behind and to put others in front, especially when you celebrate victory when nice things occur.",
        author: "Nelson Mandela",
      },
      {
        text: "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.",
        author: "Nelson Mandela",
      },
      { text: "I am prepared to die.", author: "Nelson Mandela" },
      {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
      },
      {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela",
      },
      {
        text: "Overcoming poverty is not a task of charity, it is an act of justice.",
        author: "Nelson Mandela",
      },
      {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
      },
      { text: "Liberté, égalité, fraternité.", author: "French Revolution" },
      {
        text: "France has lost a battle. But France has not lost the war.",
        author: "Charles de Gaulle",
      },
      {
        text: "Patriotism is when love of your own people comes first; nationalism, when hate for people other than your own comes first.",
        author: "Charles de Gaulle",
      },
      {
        text: "To be free is to live a life that respects and enhances the freedom of others.",
        author: "Charles de Gaulle",
      },
      {
        text: "Victory belongs to the most persevering.",
        author: "Napoleon Bonaparte",
      },
      {
        text: "France cannot be France without greatness.",
        author: "Charles de Gaulle",
      },
      {
        text: "Men are moved by two levers only: fear and self-interest.",
        author: "Napoleon Bonaparte",
      },
      {
        text: "The human race is a single family. And unless we learn to live together as brothers, we shall all perish together as fools.",
        author: "Albert Einstein (often quoted in France)",
      },
      {
        text: "The battle of France is over. I expect that the battle of Britain is about to begin.",
        author: "Winston Churchill (often quoted in France)",
      },
      {
        text: "Let France have good mothers, and she will have good sons.",
        author: "Napoleon Bonaparte",
      },
      {
        text: "Patriotism means to stand by the country. It does not mean to stand by the president.",
        author: "Vladimir Putin",
      },
    ],

    emotion: [
      // Emotion
      {
        text: "The emotion that can break your heart is sometimes the very one that heals it.",
        author: "Nicholas Sparks",
      },
      {
        text: "To love and be loved is to feel the sun from both sides.",
        author: "David Viscott",
      },
      {
        text: "Feelings are much like waves, we can’t stop them from coming, but we can choose which ones to surf.",
        author: "Jonatan Mårtensson",
      },
      {
        text: "The greatest thing you'll ever learn is just to love and be loved in return.",
        author: "Eden Ahbez",
      },
      { text: "We are most alive when we’re in love.", author: "John Updike" },
      {
        text: "Sometimes the heart sees what is invisible to the eye.",
        author: "H. Jackson Brown Jr.",
      },
      {
        text: "Every heart sings a song, incomplete, until another heart whispers back.",
        author: "Plato",
      },
      {
        text: "Feelings are just visitors, let them come and go.",
        author: "Mooji",
      },
      {
        text: "The heart has its reasons which reason knows not.",
        author: "Blaise Pascal",
      },
      {
        text: "The best way to predict your future is to create it.",
        author: "Peter Drucker",
      },
      {
        text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.",
        author: "Caroline Myss",
      },
      {
        text: "Emotion is the fuel for the passion in our life.",
        author: "Tony Robbins",
      },
      {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
      },
      {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
      },
      {
        text: "Emotion is a way of touching the essence of life.",
        author: "Shirley MacLaine",
      },
      {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
      },
      {
        text: "You must do the things you think you cannot do.",
        author: "Eleanor Roosevelt",
      },
      {
        text: "It's not how we make mistakes, but how we correct them that defines us.",
        author: "Rachel Wolchin",
      },
      {
        text: "The only way to deal with this life meaningfully is to find one's passion and put everything into it.",
        author: "Richard Gere",
      },
      {
        text: "True love is not about perfection, it is hidden in flaws.",
        author: "Unknown",
      },
    ],

    romantic: [
      // Romantic
      {
        text: "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
        author: "Gabriel Garcia Marquez",
      },
      {
        text: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë",
      },
      {
        text: "You are my sun, my moon, and all my stars.",
        author: "e. e. cummings",
      },
      {
        text: "When I saw you I fell in love, and you smiled because you knew.",
        author: "Arrigo Boito",
      },
      {
        text: "To love or have loved, that is enough. Ask nothing further.",
        author: "Victor Hugo",
      },
      {
        text: "The heart has its reasons which reason knows not.",
        author: "Blaise Pascal",
      },
      {
        text: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.",
        author: "William Shakespeare",
      },
      {
        text: "You are my everything. Everything else is just something else.",
        author: "Kyle Borja",
      },
      {
        text: "I would rather spend one lifetime with you, than face all the ages of this world alone.",
        author: "J.R.R. Tolkien",
      },
      {
        text: "You have bewitched me, body and soul, and I love, I love, I love you.",
        author: "Jane Austen",
      },
      {
        text: "In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.",
        author: "Jane Austen",
      },
      { text: "I am yours, don't give myself back to me.", author: "Rumi" },
      {
        text: "When you are with me, the world is full of light.",
        author: "Berto",
      },
      {
        text: "I fell in love with you because you loved me when I couldn't love myself.",
        author: "Kyle Borja",
      },
      { text: "You make my heart smile.", author: "Unknown" },
      {
        text: "The first time I saw you, I knew I was going to love you forever.",
        author: "Deguito",
      },
      {
        text: "If I know what love is, it's because of you.",
        author: "Herman Hesse",
      },
      {
        text: "You are the one I want to spend my life with.",
        author: "Raul Robertson",
      },
      {
        text: "You are my today and all of my tomorrows.",
        author: "Leo Christopher",
      },
      {
        text: "Being in love with you makes every day feel like Valentine's Day.",
        author: "Unknown",
      },
      {
        text: "I loved you yesterday, I love you still, I always have and I always will.",
        author: "Unknown",
      },
    ],

    success: [
      // Success
      {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        text: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
      },
      {
        text: "Opportunities don't happen. You create them.",
        author: "Chris Grosser",
      },
      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
      },
      {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
      },
      {
        text: "Your time is limited, don’t waste it living someone else’s life.",
        author: "Steve Jobs",
      },
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
      },
      {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
      },
      {
        text: "To achieve great things, two things are needed: a plan and not quite enough time.",
        author: "Leonard Bernstein",
      },
      {
        text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr.",
      },
      {
        text: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair",
      },
      {
        text: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
      },
      {
        text: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
      },
      {
        text: "Don't be discouraged. It's often the last key in the bunch that opens the lock.",
        author: "Unknown",
      },
      {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown",
      },
      {
        text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        author: "Albert Schweitzer",
      },
    ],
  };

  const quoteBox = document.getElementById("quote-box");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const quoteType = document.getElementById("quote-type");
  const voiceButton = document.getElementById("voice-button");
  const voiceCommandButton = document.getElementById("voice-command");
  let currentCategory = ""; // Store the current selected quote type
  let currentLanguage = "en"; // Store the current selected language
  let previousQuotes = []; // Store previously displayed quotes
  let currentQuoteIndex = -1; // Track the index of the current quote

  // Function to get a random quote from a specific type
  function getRandomQuote(type) {
    if (quotes[type] && quotes[type].length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes[type].length);
      return quotes[type][randomIndex];
    }
    return { text: "Please select a type of quotes!", author: "" };
  }

  // Function to display a quote
  function displayQuote(quote) {
    $("#quote-text").text(`${quote.text}`);
    $("#quote-author").text(`— ${quote.author}`);
  }

  // Example toggle function
  $("#dark-mode-toggle").on("click", function () {
    darkModeEnabled = !darkModeEnabled; // Toggle the dark mode state
    $("body").toggleClass("dark-mode"); // Toggle dark-mode class on the body

    // Apply the appropriate text color based on the new state
    if (darkModeEnabled) {
      $("#quote-author").css("color", "#ffffff");
    } else {
      $("#quote-author").css("color", "#6c757d");
    }
  });

  // Function to handle generating and displaying a new quote
  function generateNewQuote() {
    if (currentCategory) {
      const quote = getRandomQuote(currentCategory);
      displayQuote(quote);
      previousQuotes.push(quote); // Store the quote in the previous quotes array
      currentQuoteIndex = previousQuotes.length - 1; // Update the current quote index
      stopSpeech(); // Stop any ongoing speech when a new quote is generated
    }
  }

  $(document).ready(function () {
    // Sidebar toggle functions
    $("#menu-icon").on("click", function () {
      openNav();
    });

    $(".closebtn").on("click", function () {
      closeNav();
    });

    // Event listener for the Home nav button
    $("#home-nav").on("click", function () {
      closeNav(); // Close the sidebar when Home is clicked
    });

    function openNav() {
      document.getElementById("sidebar").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("sidebar").style.width = "0";
    }
  });

  
  // Event listener for the "New Quote" button
  $("#new-quote").on("click", function () {
    const $newQuoteButton = $(this);

    // Show a loading spinner inside the button
    $newQuoteButton.html('<i class="fas fa-spinner fa-spin"></i>'); // Font Awesome spinner icon

    setTimeout(function () {
      if (currentQuoteIndex < previousQuotes.length - 1) {
        // If there are already quotes in the array, move to the next one
        currentQuoteIndex++;
        const nextQuote = previousQuotes[currentQuoteIndex];
        displayQuote(nextQuote); // Display the next quote
      } else {
        // Generate a new quote and add it to the array
        currentCategory = $("#quote-type").val(); // Get the selected quote type
        generateNewQuote(); // Generate and display a new quote
      }

      // Revert button content to original text
      $newQuoteButton.html("New");
      stopSpeech(); // Stop any ongoing speech when a new or next quote is displayed
    }, 1000); // Simulate a brief loading time
  });

  // Event listener for the "Previous Quotes" button
  $("#prev-quote").on("click", function () {
    const $prevQuoteButton = $(this);

    // Show a loading spinner inside the button
    $prevQuoteButton.html('<i class="fas fa-spinner fa-spin"></i>'); // Font Awesome spinner icon

    setTimeout(function () {
      if (currentQuoteIndex > 0) {
        currentQuoteIndex--; // Move back in the array of previous quotes
        const previousQuote = previousQuotes[currentQuoteIndex];
        displayQuote(previousQuote); // Display the previous quote
      }

      // Revert button content to original text
      $prevQuoteButton.html("Prev");
      stopSpeech(); // Stop any ongoing speech when a previous quote is displayed
    }, 1000); // Simulate a brief loading time
  });

  let isVoiceRecognitionOn = false;
  let recognition;

  voiceCommandButton.addEventListener("click", function () {
    // Check if the referrer is Facebook or Messenger
    const referrer = document.referrer.toLowerCase();
    if (
      referrer.includes("facebook.com") ||
      referrer.includes("messenger.com")
    ) {
      showErrorModal(
        "Voice command not supported on this app. Please open in a different browser for full functionality."
      );
      return; // Stop further execution
    }

    // Proceed if speech recognition is available
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      if (!isVoiceRecognitionOn) {
        const SpeechRecognition =
          window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = true; // Keep recognition active until stopped manually

        recognition.onstart = function () {
          console.log("Voice recognition activated.");
          voiceCommandButton.style.backgroundColor = "#2ecc71"; // Change to green when on
        };

        recognition.onresult = function (event) {
          const transcript =
            event.results[event.resultIndex][0].transcript.toLowerCase();
          console.log(`You said: ${transcript}`);

          if (
            transcript.includes("next") ||
            transcript.includes("sunod") ||
            transcript.includes("proceed")
          ) {
            document.getElementById("new-quote").click();
          } else if (
            transcript.includes("previous") ||
            transcript.includes("prev") ||
            transcript.includes("balik")
          ) {
            document.getElementById("prev-quote").click();
          } else if (
            transcript.includes("read") ||
            transcript.includes("basahabay") ||
            transcript.includes("speak") ||
            transcript.includes("basahinmo")
          ) {
            document.getElementById("voice-button").click();
          } else if (transcript.includes("select")) {
            const selectedCategory = transcript.replace("select", "").trim();
            const optionExists = [
              ...document.getElementById("quote-type").options,
            ].some(
              (option) => option.textContent.toLowerCase() === selectedCategory
            );
            if (optionExists) {
              document.getElementById("quote-type").value = selectedCategory;
              document
                .getElementById("quote-type")
                .dispatchEvent(new Event("change"));
            }
          } else if (transcript.includes("search")) {
            const searchQuery = transcript.replace("search", "").trim();
            document.getElementById("search-bar").value = searchQuery;
            document.getElementById("search-button").click();
          }
        };

        recognition.onerror = function (event) {
          console.error(`Error occurred in recognition: ${event.error}`);
        };

        recognition.start();
        isVoiceRecognitionOn = true;
      } else {
        recognition.stop();
        console.log("Voice recognition deactivated.");
        voiceCommandButton.style.backgroundColor = "#e74c3c"; // Change button color to red (off state)
        isVoiceRecognitionOn = false;
      }
    } else {
      showErrorModal(
        "Voice recognition is not supported on this app. Please open in a different browser for full functionality."
      );
    }
  });

  // Function to speak the quote using the Web Speech API
  function speakQuote(quote) {
    stopSpeech(); // Stop any ongoing speech before starting a new one

    if ("speechSynthesis" in window) {
      const speechSynthesisUtterance = new SpeechSynthesisUtterance(
        `${quote.text} ${quote.author}`
      );

      // Check if the current language is Filipino
      if (currentLanguage === "tl") {
        speechSynthesisUtterance.lang = "fil-PH"; // Set language to Filipino
        // Optionally, you can also specify a specific Filipino voice if available
        const voices = speechSynthesis.getVoices();
        const filipinoVoice = voices.find(
          (voice) => voice.lang === "fil-PH" || voice.lang === "tl-PH"
        );
        if (filipinoVoice) {
          speechSynthesisUtterance.voice = filipinoVoice; // Set to a Filipino voice if available
        }
      } else {
        speechSynthesisUtterance.lang = "en-US"; // Default to English
      }

      speechSynthesis.speak(speechSynthesisUtterance);
    } else {
      showErrorModal("Speech synthesis is not supported on this app.");
    }
  }

  // Function to show error modal
  function showErrorModal(message) {
    // Display error modal with the given message
    $("#errorModal .modal-body").text(message); // Set the message in the modal body
    $("#errorModal").modal("show"); // Show the modal
  }

  // Function to stop any ongoing speech
  function stopSpeech() {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel(); // Stop any ongoing speech
    }
  }

  // Event listener for the voice button
  $("#voice-button").on("click", function () {
    const quoteText = $("#quote-text").text().trim(); // Get the current text in the quote container

    // Check if the quote container displays "no quotes found"
    if (quoteText === "" || quoteText.toLowerCase() === "no quotes found.") {
      showErrorModal("No quote available to read."); // Show error modal if no quote is available
      return; // Stop further execution
    }

    const currentQuote = previousQuotes[currentQuoteIndex];

    // Check if speech synthesis is supported
    if ("speechSynthesis" in window) {
      if (currentQuote) {
        speakQuote(currentQuote);
      } else {
        showErrorModal("No quote available to read."); // Show error modal if no quote is available
      }
    } else {
      // Check if the referrer is one of the specified platforms
      const referrer = document.referrer.toLowerCase();
      if (
        referrer.includes("facebook.com") ||
        referrer.includes("messenger.com") ||
        referrer.includes("instagram.com")
      ) {
        showErrorModal(
          "Speech synthesis not supported on this app. Please open in a different browser for full functionality."
        );
      } else {
        showErrorModal("Speech synthesis is not supported on this app.");
      }
    }
  });

  // Function to show error modal
  function showErrorModal(message) {
    $("#errorModal .modal-body").text(message); // Set the message in the modal body
    $("#errorModal").modal("show"); // Show the modal
  }

  // Event listener for closing the error modal via the primary close button (x or close icon)
  $("#errorModal").on("click", ".close", function () {
    $("#errorModal").modal("hide"); // Hide the modal when close button or close icon is clicked
  });

  // Event listener for closing the error modal via the secondary close button
  $("#errorModal").on("click", ".secondary-close", function () {
    $("#errorModal").modal("hide"); // Hide the modal when secondary close button is clicked
  });

  // Event listener to hide the error modal when the modal is dismissed
  $("#errorModal").on("hidden.bs.modal", function () {
    $(this).modal("hide"); // Hide the modal
  });

  // Event listener for the search bar
  $("#search-bar").on("input", function () {
    const searchTerm = $(this).val().toLowerCase();
    const filteredQuotes = quotes[currentCategory]?.filter((quote) =>
      quote.text.toLowerCase().startsWith(searchTerm)
    );

    stopSpeech(); // Stop any ongoing speech when searching for a quote

    if (filteredQuotes && filteredQuotes.length > 0) {
      displayQuote(filteredQuotes[0]); // Display the first match
      previousQuotes.push(filteredQuotes[0]); // Store the displayed quote in the previous quotes array
      currentQuoteIndex = previousQuotes.length - 1; // Update the current quote index
    } else {
      $("#quote-text").text("No quotes found.");
      $("#quote-author").text("");
    }
  });

  // Event listener for the quote type dropdown
  $("#quote-type").on("change", function () {
    currentCategory = $(this).val();
    if (quotes[currentCategory] && quotes[currentCategory].length > 0) {
      const firstQuote = quotes[currentCategory][0]; // Get the first quote in the selected type
      displayQuote(firstQuote); // Automatically display the first quote
      previousQuotes.push(firstQuote); // Store the quote in the previous quotes array
      currentQuoteIndex = previousQuotes.length - 1; // Update the current quote index
      stopSpeech(); // Stop any ongoing speech when a previous quote is displayed
    } else {
      displayQuote({ text: "Please select a type of quotes!", author: "" });
    }
  });

  // Initial load: Display a message
  $("#quote-text").text("Choose a type of quotes.");
});

$(document).ready(function () {
  // Initial validation check when the page loads
  const initialQuoteText = $("#quote-text").text().trim();

  // Check if the initial quote text is empty or contains default messages
  if (
    initialQuoteText === "" ||
    initialQuoteText.toLowerCase() === "choose type of quotes." ||
    initialQuoteText.toLowerCase() === "no quotes found."
  ) {
    // Disable the Twitter button if no quote is available
    $("#twitter-button").prop("disabled", true);
  }

  // Event listener for the Twitter button
  $("#twitter-button").on("click", function () {
    const quoteText = $("#quote-text").text().trim(); // Get the current text in the quote container
    const quoteAuthor = $("#quote-author").text().trim(); // Get the current author in the quote container

    // Check if there's a quote to share or if it's the initial page load with default messages
    if (
      quoteText === "" ||
      quoteText.toLowerCase() === "no quotes found." ||
      quoteText.toLowerCase() === "choose type of quotes."
    ) {
      showErrorModal("No quote available to share."); // Show error modal if no quote is available
    } else {
      const fullQuote = encodeURIComponent(`${quoteText} ${quoteAuthor}`);

      // Open Twitter's share dialog with the quote pre-filled
      const twitterUrl = `https://twitter.com/intent/tweet?text=${fullQuote}`;
      window.open(twitterUrl, "_blank"); // Open in a new tab and allow the user to post the tweet
    }
  });

  // Function to show error modal
  function showErrorModal(message) {
    // Display error modal with the given message
    $("#errorModal .modal-body").text(message); // Set the message in the modal body
    $("#errorModal").modal("show"); // Show the modal
  }
});

// Event listener for the copy button
$("#copy-quote").on("click", function () {
  const quoteText = $("#quote-text").text().trim();
  const quoteAuthor = $("#quote-author").text().trim();

  // Check if there is a quote to copy
  if (
    quoteText === "" ||
    quoteText === "Choose a type of quotes." ||
    quoteText.toLowerCase() === "no quotes found"
  ) {
    showErrorModal("No quote available to copy."); // Show error modal if no quote is available
    return; // Stop further execution
  }

  const fullQuote = `${quoteText} ${quoteAuthor}`;

  // Attempt to copy the quote to the clipboard
  navigator.clipboard
    .writeText(fullQuote)
    .then(() => {
      alert("Quote copied to clipboard!"); // Success message
    })
    .catch(() => {
      showErrorModal("Failed to copy the quote."); // Show error modal if copying fails
    });
});

// Function to show error modal
function showErrorModal(message) {
  // Display error modal with the given message
  $("#errorModal .modal-body").text(message); // Set the message in the modal body
  $("#errorModal").modal("show"); // Show the modal
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMode");
  const lightIcon = document.getElementById("lightIcon");
  const darkIcon = document.getElementById("darkIcon");
  const body = document.body;

  // Theme toggle functionality
  $("#theme-toggle").on("click", function () {
    if ($("body").hasClass("dark-mode")) {
      $("body").removeClass("dark-mode").addClass("light-mode");
    } else {
      $("body").removeClass("light-mode").addClass("dark-mode");
    }
  });

  // Initial icon update
  updateIcon();

  // Toggle mode and icon
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    updateIcon();
  });
});

$(document).ready(function () {
  const apiKey = "pub_519159624462e0acb90653469dc9d12e062a1";
  const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=ph&language=en`;

  function fetchNewsUpdates() {
    $.get(apiUrl, function (data) {
      let newsHtml = "";
      const wordLimit = 20; // Set word limit for description

      if (data.results && data.results.length > 0) {
        data.results.forEach((news) => {
          let descriptionWords = news.description.split(" ");
          let truncatedDescription = descriptionWords
            .slice(0, wordLimit)
            .join(" ");
          let isTruncated = descriptionWords.length > wordLimit;

          // Calculate time difference in minutes, hours, and days
          let pubDate = new Date(news.pubDate);
          let currentTime = new Date();
          let timeDifference = Math.floor(
            (currentTime - pubDate) / (1000 * 60)
          ); // Difference in minutes
          let timeDisplay;

          if (timeDifference < 60) {
            timeDisplay = `${timeDifference} minutes ago`;
          } else if (timeDifference < 1440) {
            // Less than 24 hours
            let hoursDifference = Math.floor(timeDifference / 60);
            timeDisplay = `${hoursDifference} hours ago`;
          } else {
            let daysDifference = Math.floor(timeDifference / 1440); // Convert minutes to days
            timeDisplay =
              daysDifference === 1 ? "1 day ago" : `${daysDifference} days ago`;
          }

          newsHtml += `
                        <div class="news-item">
                            <h3>${news.title}</h3>
                            <p>${truncatedDescription}${
            isTruncated ? "..." : ""
          }</p>
                            ${
                              isTruncated
                                ? `<a href="#" class="read-more">Read more</a>`
                                : ""
                            }
                            <span class="full-description" style="display: none;">${
                              news.description
                            }</span>
                            <p>Posted ${timeDisplay}</p>
                            <a href="${
                              news.link
                            }" target="_blank">Go to Source</a>
                        </div>
                    `;
        });
      } else {
        if ($("#news-updates").html().trim() === "") {
          newsHtml = "<p>No news available at the moment.</p>";
        }
      }
      $("#news-updates").html(newsHtml);

      // Event listener for "Read more" toggle
      $(".read-more").on("click", function (e) {
        e.preventDefault();
        const $fullDescription = $(this).siblings(".full-description");
        const $truncatedDescription = $(this).siblings("p");

        $truncatedDescription.toggle();
        $fullDescription.toggle();

        $(this).text(
          $fullDescription.is(":visible") ? "Read less" : "Read more"
        );
      });
    }).fail(function () {
      $("#news-updates").html(
        "<p>Failed to load news updates. Please try again later.</p>"
      );
    });
  }

  // Fetch news updates on page load
  fetchNewsUpdates();

  // Fetch new updates every 10 minutes (600,000 milliseconds)
  setInterval(fetchNewsUpdates, 600000);
});

// Replace this with your actual NewsData.io API key
const apiKey = "pub_519159624462e0acb90653469dc9d12e062a1";

// Function to fetch news feed data from the API
function fetchNewsData() {
  const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us&language=en&category=top`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data && data.results && data.results.length > 0) {
        populateCarousel(data.results);
      } else {
        console.error("No news data found");
      }
    })
    .catch((error) => {
      console.error("Error fetching news data:", error);
    });
}

// Function to populate the carousel with news feed images and captions
function populateCarousel(newsData) {
  const carouselInner = document.getElementById("carousel-inner");
  const carouselIndicators = document.getElementById("carousel-indicators");

  newsData.forEach((newsItem, index) => {
    // Create carousel item
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    // Image for the carousel item
    const img = document.createElement("img");
    img.src = newsItem.image_url || "default-image.jpg"; // Fallback to a default image if image_url is missing
    img.classList.add("d-block");
    img.style.width = "100%";
    img.alt = newsItem.title;

    // Create a caption container
    const caption = document.createElement("div");
    caption.classList.add("carousel-caption", "d-none", "d-md-block");

    // Create title element
    const title = document.createElement("h5");
    title.textContent = newsItem.title || "No title available";

    // Create description element
    const description = document.createElement("p");
    description.textContent =
      newsItem.description || "No description available";

    // Append title and description to caption
    caption.appendChild(title);
    caption.appendChild(description);

    // Append image and caption to the carousel item
    carouselItem.appendChild(img);
    carouselItem.appendChild(caption);
    carouselInner.appendChild(carouselItem);

    // Create indicator for carousel
    const indicator = document.createElement("button");
    indicator.type = "button";
    indicator.dataset.bsTarget = "#demo";
    indicator.dataset.bsSlideTo = index;
    if (index === 0) {
      indicator.classList.add("active");
    }
    carouselIndicators.appendChild(indicator);
  });
}

// Call the function to fetch news data when the page loads
fetchNewsData();

$(document).ready(function () {
  const apiKey = "6441e549ce4b2b83a3226a5978b095c5";

  // Function to fetch weather data based on latitude and longitude
  function fetchWeatherData(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    // Current weather data
    $.getJSON(apiUrl, function (data) {
      const location = `${data.name}, ${data.sys.country}`;
      const temperature = `${data.main.temp}°C`;
      const feelsLike = `Feels like: ${data.main.feels_like}°C`;
      const description = data.weather[0].description;
      const humidity = `Humidity: ${data.main.humidity}%`;
      const windSpeed = `Wind: ${data.wind.speed} m/s`;
      const pressure = `Pressure: ${data.main.pressure} hPa`;
      const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      // Format sunrise and sunset times
      const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Update the HTML with current weather data
      $("#weather-location").text(location);
      $("#weather-temperature").text(temperature);
      $("#weather-feels-like").text(feelsLike);
      $("#weather-description").text(description);
      $("#weather-humidity").text(humidity);
      $("#weather-wind").text(windSpeed);
      $("#weather-pressure").text(pressure);
      $("#weather-sunrise").text(`Sunrise: ${sunrise}`);
      $("#weather-sunset").text(`Sunset: ${sunset}`);
      $("#weather-icon").attr("src", icon);
    }).fail(function () {
      $("#weather-forecast").html(
        "<p>Unable to fetch weather data. Please try again later.</p>"
      );
    });

    // Hourly forecast data
    $.getJSON(forecastUrl, function (forecastData) {
      let forecastHtml = "";
      const forecastList = forecastData.list.slice(0, 6); // Get next 6 time slots

      forecastList.forEach((forecast) => {
        const time = new Date(forecast.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const temp = `${forecast.main.temp}°C`;
        const desc = forecast.weather[0].description;
        const icon = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

        forecastHtml += `
                    <div class="hourly-forecast">
                        <p>${time}</p>
                        <img src="${icon}" alt="${desc}" title="${desc}" />
                        <p>${temp}</p>
                        <p>${desc}</p>
                    </div>
                `;
      });

      $("#hourly-forecast").html(forecastHtml);
    }).fail(function () {
      $("#hourly-forecast").html(
        "<p>Unable to fetch forecast data. Please try again later.</p>"
      );
    });
  }

  // Function to get user's location and fetch weather data
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeatherData(lat, lon);
        },
        function (error) {
          $("#weather-forecast").html(
            "<p>Unable to retrieve your location. Please allow location access and try again.</p>"
          );
        }
      );
    } else {
      $("#weather-forecast").html(
        "<p>Geolocation is not supported by this browser.</p>"
      );
    }
  }

  // Call the function to get location and fetch weather data when the page loads
  getLocation();
});

function displayHourlyForecast(hourlyData) {
  const hourlyForecastContainer = document.getElementById("hourly-forecast");
  hourlyForecastContainer.innerHTML = ""; // Clear any existing content

  hourlyData.forEach((hour) => {
    // Create the forecast item container
    const forecastItem = document.createElement("div");
    forecastItem.className = "hourly-forecast-item";

    // Time element
    const timeElement = document.createElement("div");
    timeElement.className = "hourly-forecast-time";
    timeElement.textContent = formatTime(hour.dt); // Format time from API data
    forecastItem.appendChild(timeElement);

    // Date element
    const dateElement = document.createElement("div");
    dateElement.className = "hourly-forecast-date";
    dateElement.textContent = formatDate(hour.dt); // Format date from API data
    forecastItem.appendChild(dateElement);

    // Icon element
    const iconElement = document.createElement("div");
    iconElement.className = "hourly-forecast-icon";
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`; // Get icon from API
    weatherIcon.alt = hour.weather[0].description; // Alt text as description
    iconElement.appendChild(weatherIcon);
    forecastItem.appendChild(iconElement);

    // Temperature element
    const tempElement = document.createElement("div");
    tempElement.className = "hourly-forecast-temp";
    tempElement.textContent = `${Math.round(hour.temp)}°C`; // Temperature from API
    forecastItem.appendChild(tempElement);

    // Description element
    const descElement = document.createElement("div");
    descElement.className = "hourly-forecast-desc";
    descElement.textContent = hour.weather[0].description; // Weather description from API
    forecastItem.appendChild(descElement);

    // Append the forecast item to the container
    hourlyForecastContainer.appendChild(forecastItem);
  });
}

// Helper function to format time (e.g., '11 pm')
function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: "numeric", hour12: true });
}

// Helper function to format date (e.g., 'Aug 30')
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

// Function to update Date and Time
function updateDateTime() {
  const date = new Date();

  // Arrays for day and month names
  const days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, month, year, and time
  const day = days[date.getDay()];
  const dayNumber = date.getDate(); // Get day number
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 12-hour format
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display in HTML
  document.getElementById("current-day").textContent = `${dayNumber} ${day}`;
  document.getElementById("current-month").textContent = month;
  document.getElementById("current-year").textContent = year;
  document.getElementById("current-time").textContent =
    hours + ":" + minutes + ":" + seconds + " " + ampm;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Call the function immediately to set the initial date and time
updateDateTime();

function openNav() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("menu-icon").style.display = "none";
}

function closeNav() {
  document.getElementById("sidebar").style.left = "-250px";
  document.getElementById("menu-icon").style.display = "block";
}










   















