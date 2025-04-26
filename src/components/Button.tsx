export interface ButtonProps {
  text: string;
  onClick: () => void;
  variants?: 'primary' | 'secondary';
}

export function Button(props: ButtonProps) {
  return (
    <button className={`text-s whitespace-nowrap ${props.variants === 'primary' ? 'button-primary' : 'button-secondary'}`} onClick={props.onClick} type="button">
      {props.text}
    </button>
  );
}
