export type Option = {
    code?: string;
    name: string;
    imageUrl: string;
  };
  
  export type SelectProps = {
    data: Option[];
    isVerticalLine?: boolean;
    color?: string;
    arrowStyles?:React.CSSProperties;
    onChange: (selected?: Option) => void;
  };