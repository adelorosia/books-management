export interface IBooks {
  id: number;
  name: string;
  due: string;
  amount: string;
  imgUrl: string;
  desc: string;
  idGenre: number;
}

// export interface IBook {
//   name: string;
//   due: string;
//   amount: string;
//   imgUrl: string;
//   desc: string;
//   Genre: string;
// }

export interface IGenre {
  id: number;
  genre: string;
}
