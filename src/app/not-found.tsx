import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#040810] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-[#22C55E] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#22C55E]/30">
          <Zap size={28} className="text-white" fill="white" />
        </div>
        <div className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">404: Page Not Found</div>
        <h1 className="text-4xl font-bold text-white mb-4">This page does not exist</h1>
        <p className="text-[#94A3B8] mb-8 leading-relaxed">
          But qualified leads are out there right now waiting to be reached. Let the system find them.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#22C55E]/25"
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
