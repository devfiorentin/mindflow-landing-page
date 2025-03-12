export default function CardResources({ icon, title, description }) {
    return (
      <div className=" p-8 transition-shadow w-[300px] rounded-3xl bg-[#EEEAFE]">
        <div className="w-12 h-12  rounded-xl flex items-center justify-center text-2xl mb-6 bg-[#EDE9FE]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-4">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    );
  }
  