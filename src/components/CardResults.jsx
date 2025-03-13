export default function CardResults({ value, title, description }) {
  return (
    <div className="text-center w-[280px] md:w-[300px]">
      <h1 className="text-blue-600 font-bold text-4xl mb-2">{value}</h1>
      <h2 className="text-[20px] font-semibold text-[#171717] mb-2">
        {title}
      </h2>
      <p className="text-[16px] md:text-lg text-[#525252] font-normal">
        {description}
      </p>
    </div>
  );
}
