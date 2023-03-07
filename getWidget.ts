interface Point {
  x: number;
  y: number;
  add: (obj: Object) => void;
  get: () => this;
};
function getWidget(s: string): Point[] {
	if (s == 'array'){
		class pnt implements Point{
			  x: number;
  			  y: number;
  			  slf:Object;
  			  add (obj: Object):void{
				this.slf = obj;	
				};
  			   get: () => this; 
		}
		let p = new pnt;
		p.x=10;
		p.y=12;
		p.add(p);
		return [p,p,p];
	}
	return [];
};
export default getWidget;

export { getWidget };