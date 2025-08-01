// Movie data with more selections and better organization
export interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  year: number;
  duration: string;
  rating: number;
  price: number;
  genres: string[];
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    year: 2010,
    duration: '2h 28m',
    rating: 8.8,
    price: 9.99,
    genres: ['Action', 'Adventure', 'Sci-Fi']
  },
  {
    id: '2',
    title: 'The Shawshank Redemption',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    year: 1994,
    duration: '2h 22m',
    rating: 9.3,
    price: 8.99,
    genres: ['Drama']
  },
  {
    id: '3',
    title: 'The Dark Knight',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    year: 2008,
    duration: '2h 32m',
    rating: 9.0,
    price: 9.99,
    genres: ['Action', 'Crime', 'Drama']
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    year: 1994,
    duration: '2h 34m',
    rating: 8.9,
    price: 7.99,
    genres: ['Crime', 'Drama']
  },
  {
    id: '5',
    title: 'The Godfather',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    year: 1972,
    duration: '2h 55m',
    rating: 9.2,
    price: 8.99,
    genres: ['Crime', 'Drama']
  },
  {
    id: '6',
    title: 'Interstellar',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    year: 2014,
    duration: '2h 49m',
    rating: 8.6,
    price: 10.99,
    genres: ['Adventure', 'Drama', 'Sci-Fi']
  },
  {
    id: '7',
    title: 'Fight Club',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg',
    description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
    year: 1999,
    duration: '2h 19m',
    rating: 8.8,
    price: 8.99,
    genres: ['Drama']
  },
  {
    id: '8',
    title: 'The Matrix',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    year: 1999,
    duration: '2h 16m',
    rating: 8.7,
    price: 7.99,
    genres: ['Action', 'Sci-Fi']
  },
  {
    id: '9',
    title: 'Goodfellas',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.',
    year: 1990,
    duration: '2h 26m',
    rating: 8.7,
    price: 6.99,
    genres: ['Biography', 'Crime', 'Drama']
  },
  {
    id: '10',
    title: 'The Lord of the Rings: The Return of the King',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    year: 2003,
    duration: '3h 21m',
    rating: 9.0,
    price: 10.99,
    genres: ['Action', 'Adventure', 'Drama']
  },
  {
    id: '11',
    title: 'Parasite',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    year: 2019,
    duration: '2h 12m',
    rating: 8.5,
    price: 11.99,
    genres: ['Comedy', 'Drama', 'Thriller']
  },
  {
    id: '12',
    title: 'Joker',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.',
    year: 2019,
    duration: '2h 2m',
    rating: 8.4,
    price: 10.99,
    genres: ['Crime', 'Drama', 'Thriller']
  },
  {
    id: '13',
    title: 'Whiplash',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
    year: 2014,
    duration: '1h 47m',
    rating: 8.5,
    price: 8.99,
    genres: ['Drama', 'Music']
  },
  {
    id: '14',
    title: 'The Silence of the Lambs',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    year: 1991,
    duration: '1h 58m',
    rating: 8.6,
    price: 7.99,
    genres: ['Crime', 'Drama', 'Thriller']
  },
  {
    id: '15',
    title: 'The Departed',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg',
    description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    year: 2006,
    duration: '2h 31m',
    rating: 8.5,
    price: 8.99,
    genres: ['Crime', 'Drama', 'Thriller']
  },
  {
    id: '16',
    title: 'Gladiator',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    year: 2000,
    duration: '2h 35m',
    rating: 8.5,
    price: 8.99,
    genres: ['Action', 'Adventure', 'Drama']
  },
  {
    id: '17',
    title: 'The Green Mile',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg',
    description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
    year: 1999,
    duration: '3h 9m',
    rating: 8.6,
    price: 7.99,
    genres: ['Crime', 'Drama', 'Fantasy']
  },
  {
    id: '18',
    title: 'Saving Private Ryan',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg',
    description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    year: 1998,
    duration: '2h 49m',
    rating: 8.6,
    price: 8.99,
    genres: ['Drama', 'War']
  }
];