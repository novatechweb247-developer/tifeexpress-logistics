import React, { useState } from 'react';
import { PhoneCall, FileText, CheckCircle2, Truck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, BUSINESS_INFO } from '../data/logisticsData';

interface HowItWorksSectionProps {
  onOpenInquiry?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenInquiry }) => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <PhoneCall className="w-5 h-5 text-amber-400" />,
    <FileText className="w-5 h-5 text-amber-400" />,
    <CheckCircle2 className="w-5 h-5 text-amber-400" />,
    <Truck className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#0F1626] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>Logistics Workflow</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Straightforward Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
            How Delivery Works with Tifeexpress
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Our straightforward 4-step coordination ensures every package inquiry is handled clearly, from your initial call to safe destination handoff.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#162137] border-amber-400/50 shadow-xl shadow-amber-500/5'
                    : 'bg-[#111827]/60 hover:bg-[#111827] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold font-mono text-amber-400 tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {stepIcons[index]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white font-display mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Practical Tip / Note */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-400 leading-snug block">
                    {step.note}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout banner with Call / WhatsApp action */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-800/60 to-amber-500/5 border border-amber-500/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-lg font-semibold text-white font-display mb-1">
              Ready to arrange your delivery?
            </h4>
            <p className="text-sm text-slate-300">
              Speak directly with our team in Challenge Axis, Ibadan at <span className="font-mono text-amber-400 font-semibold">{BUSINESS_INFO.phone}</span> or submit an online inquiry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>
            <button
              type="button"
              onClick={onOpenInquiry}
              className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <span>Start an Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
