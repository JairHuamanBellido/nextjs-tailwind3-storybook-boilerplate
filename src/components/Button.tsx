import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {}

export default function Button({ ...props }: Props) {
  return <button>Button</button>;
}
