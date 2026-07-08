type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  bike: string,
  car: string,
  ship: string,
};

type checkVehicles<T> = T extends keyof RichPeopleVehicle ? true : false;

type hasBike = checkVehicles<'ship'>


type course = {
  bangle: string,
  english: string,
  math: string
}

type checkTypeCourse<T> = T extends keyof course ? true : false;

type hasColor= checkTypeCourse<'bangle'>


export default {}