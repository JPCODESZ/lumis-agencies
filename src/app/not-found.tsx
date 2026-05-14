import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-[#0EA5E9] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#0EA5E9]/30">
          <Zap size={28} className="text-white" fill="white" />
        </div>
        <div className="text-[#0EA5E9] text-sm font-semibold uppercase tracking-widest mb-3">404: Page Not Found</div>
        <h1 className="text-4xl font-bold text-white mb-4">This page doesn&apos;t exist</h1>
        <p className="text-[#94A3B8] mb-8 leading-relaxed">
          But your leads are out there right now, waiting for a response. Don&apos;t keep them waiting.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-[#0EA5E9]/25"
        >
          Back to Home
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
