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
      className={` rounded-2xl text-base md:text-lg  transition-all duration-200 ${className}`}
      role="button"
      tabIndex={0}
    >
      {text}
    </button>
  );
}
