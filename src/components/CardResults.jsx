export default function CardResults({ value, title, description }) {
  return (
    <div className="text-center w-[250px]">
      <h1 className="text-blue-600 font-bold text-4xl mb-2">{value}</h1>
      <h2 className="text-[20px] font-bold text-[#171717] mb-2">
        {title}
      </h2>
      <p className="text-[16px] text-[#525252] font-light">
        {description}
      </p>
    </div>
  );
}
