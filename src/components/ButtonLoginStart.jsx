import Link from "next/link";

export default function ButtonLoginStart({ text, className, href }) {
  return href ? (
    <Link href={href} passHref>
      <button
        className={`rounded-2xl text-base md:text-lg transition-all duration-200 ${className} cursor-pointer`}
        role="button"
        tabIndex={0}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={`px-6 py-3 md:px-8 md:py-4 rounded-2xl text-base md:text-lg  transition-all duration-200 ${className}`}
      role="button"
      tabIndex={0}
    >
      {text}
    </button>
  );
}
