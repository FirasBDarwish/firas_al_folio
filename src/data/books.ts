export type Book = {
  title: string;
  author: string;
  /** Optional. Omit to use the built-in minimalist cover. */
  cover?: string;
  dateRead?: string;
  note: string;
  favourite?: boolean;
  currentlyReading?: boolean;
  height?: number;
  width?: number;
};

export const books: Book[] = [
  {
    title: 'Frankenstein in Bahgdad',
    author: 'Ahmed Saadawi',
    cover: '/images/books/frankenstein_in_baghdad.png',
    dateRead: 'August 2026',
    note: `Trauma, magical realism, and satire. I loved Mary Shelly's Frankenstein and this is the perfect adaptation to read after.`,
    favourite: false,
    height: 200,
    width: 130,
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    cover: '/images/books/dune.png',
    dateRead: 'June 2025',
    note: `Philosophy disguised as fiction. This book puts on full display what can happen when culture, politics, and religion intertwine.`,
    favourite: true,
    height: 258,
    width: 166,
  },
  {
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    cover: '/images/books/kafka_on_the_shore.png',
    dateRead: 'December 2024',
    note: `Strange and magical, sometimes a little too much. Characters are wonderful and entertaining but the story is not as cohesive as I would have liked it to be.`,
    favourite: false,
    height: 228,
    width: 146,
  },
  {
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    cover: '/images/books/the_night_circus.png',
    dateRead: 'August 2025',
    note: `This book made me fall in love with reading. Erin's words paint a beautiful picture, so many images from the Night Circus still sit in my head. Beautiful writing.`,
    favourite: true,
    height: 236,
    width: 150,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: '/images/books/the_great_gatsby.png',
    note: `Classic. What a world it builds, love the nods to a fictitious New York.`,
    favourite: true,
    height: 250,
    width: 160,
  },
  {
    title: 'Widsom Takes Work: Learn. Apply. Repeat',
    author: 'Ryan Holiday',
    cover: '/images/books/widsom_takes_work.png',
    note: `Recommended by my father, many tidbits of history to support the claims, but ultimately reads like a to-do list (nonetheless a great to-do list).`,
    favourite: false,
    currentlyReading: true,
    height: 228,
    width: 146,
  },
  {
    title: 'Murder on the Orient Express',
    author: 'Agatha Christie',
    cover: '/images/books/motoe.png',
    note: `I had the privilege of reading this with my mother before the movie came out. Classic whodunit.`,
    favourite: false,
    currentlyReading: false,
    height: 228,
    width: 146,
  },
  {
    title: 'No Exit',
    author: 'Jean-Paul Sartre',
    cover: '/images/books/no_exit.png',
    note: `The original Good Place.`,
    favourite: true,
    currentlyReading: false,
    height: 250,
    width: 160,
  },
  {
    title: 'The Overcoat',
    author: 'Nikolai Gogol',
    cover: '/images/books/the_overcoat.png',
    note: `Do not get in between a man and his coat!`,
    favourite: false,
    currentlyReading: false,
    height: 210,
    width: 150,
  },
  {
    title: 'Chums: How a Tiny Caste of Oxford Tories Took Over the UK',
    author: 'Simon Kuper',
    cover: '/images/books/chums.png',
    note: `The essential Oxford starter pack.`,
    favourite: false,
    currentlyReading: false,
    height: 236,
    width: 150,
  },
  {
    title: 'Kitchen',
    author: 'Banana Yoshimoto',
    cover: '/images/books/kitchen.png',
    note: `Grief as it is: slow, mellow, draining. One of my favourites.`,
    favourite: true,
    currentlyReading: false,
    height: 258,
    width: 166,
  },
  {
    title: 'The Stranger',
    author: 'Albert Camus',
    cover: '/images/books/the_stranger.png',
    note: `One of my favourite works of philosophy with a shadow of a central figure.`,
    favourite: true,
    currentlyReading: false,
    height: 228,
    width: 146,
  },
  {
    title: 'A Beginner\'s Guide to Dying',
    author: 'Simon Boas',
    cover: '/images/books/a_beginners_guide_to_dying.png',
    note: `Simon teaches you how to die well, and maybe through it you learn how to live just a little bit better.`,
    favourite: true,
    currentlyReading: false,
    height: 228,
    width: 146,
  },
];
