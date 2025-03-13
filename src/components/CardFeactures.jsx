export default function CardFeactures({ icon, title, description }) {
    return (
      <div className="bg-white p-8 rounded-2xl hover:shadow-md transition-shadow max-w-[500px] break-words wrap direction-column  ">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl mb-6">
          {icon}
        </div>
        <h3 className=" text-[17px] md:text-xl font-semibold text-neutral-900 mb-4">{title}</h3>
        <p className="text-[16px] md:text-lg text-neutral-600">{description}</p>
      </div>
    );
  }
  