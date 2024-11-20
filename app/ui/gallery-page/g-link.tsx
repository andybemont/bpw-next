import Link from "next/link";

export default function GLink(props: { a: string; children: React.ReactNode }) {
  const { a, children } = props;
  return (
    <Link href={a} className="underline">
      {children}
    </Link>
  );
}
