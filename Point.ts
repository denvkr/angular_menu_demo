interface Point {
  x: number;
  y: number;
  add: (obj: Object) => void;
  get: () => this;  
};
export default Point;

export { Point };