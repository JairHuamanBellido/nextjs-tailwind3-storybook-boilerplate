import { useTheme } from "next-themes";
import { HtmlHTMLAttributes } from "react";

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> { }

export default function Button({ ...props }: Props) {

  const { theme, setTheme } = useTheme()

  const toggle = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }
  return <button onClick={toggle} {...props} className="h-11 px-6 rounded-sm bg-slate-800 text-white dark:bg-white dark:text-slate-700" >Button</button>;
}
