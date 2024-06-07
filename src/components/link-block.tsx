import Link from 'next/link'

interface LinkBlockProps {
  label: string,
  href: string
}

export default function LinkBlock ({ label, href }: LinkBlockProps) {
  return (
    <Link
      className="w-full flex p-4 py-6 items-center justify-center bg-amber-50 text-cyan-950 text-body font-bold"
      href={href}
    >
      {label}
    </Link>
  )
}
