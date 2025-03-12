import MenuLateralDashboard from "@/components/MenuLateralDashboard";

export default function Dashboard() {
  return (
    <div className="flex gap-10">
      <MenuLateralDashboard />

      <section className="flex flex-col gap-4">
        {/* Frase do dia */}
        <div className="frase-motivacional bg-slate-100 p-4 rounded-md w-full">
          <h1>Frase do dia</h1>
          <p>"A vida é curta, vive a vida que você sempre sonhou."</p>
          <p>- Steve Jobs</p>
        </div>
      </section>
    </div>
  );
}
