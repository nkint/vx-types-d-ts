declare module "@vx/shape" {
  type PolygonProps = {
    sides: number;
    size: number;
    fill: string;
    rotate: number;
  };
  export class Polygon extends React.Component<PolygonProps> {}
}
