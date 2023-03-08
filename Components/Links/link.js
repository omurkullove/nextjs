import Link from "next/link";

export default function Links({ text, href }) {
  return <Link href={href}>{text}</Link>;
}
