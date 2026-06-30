//union : eta or ota, that means jekono ekta hobe. | diye mention kora hoy


type userRole = 'admin' | 'user';

const getDashBoard = (role: userRole) => {
  if (role === 'admin') {
    return 'admin dashboard';
  } else if (role === 'user') {
    return 'user dashboard';
  } else {
    return 'guest dashboard';
  }
};

console.log(getDashBoard('hello'));

//intersection e 1 ta & use korte hobe

type Emp = {
  id: number;
  name: string;
  mobile: number;
}

type manager = {
  office: string;
  rating: number;
}

type empManager = Emp & manager

const boss: empManager = {
  name: 'anon',
  id: 4,
  mobile: 234,
  office: "brain station",
  rating: 5,

}
console.log(boss);