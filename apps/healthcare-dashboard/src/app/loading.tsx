export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-white/20 border-t-teal-300" />
        <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
          Loading dashboard
        </p>
      </div>
    </div>
  );
}
