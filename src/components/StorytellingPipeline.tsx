'use client';

import React, { useState } from 'react';
import { PIPELINE_STEPS } from '../data/projectData';
import { Check, ArrowRight, Layers, FileText, Cpu, ShieldCheck, Database, Eye } from 'lucide-react';
import Image from 'next/image';

const STEP_ICONS = [Layers, FileText, Cpu, ShieldCheck, Database];

export default function StorytellingPipeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = PIPELINE_STEPS[activeStepIndex];
  const StepIcon = STEP_ICONS[activeStepIndex];

  return (
    <div className="space-y-8">
      {/* Horizontal Stepper inspired by the reference site */}
      <div className="bg-white rounded-2xl border border-stone-200 p-2 shadow-sm">
        <div className="grid grid-cols-5 gap-2">
          {PIPELINE_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl text-left transition-all relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-gold-50/70 border border-gold-300 shadow-sm'
                    : 'hover:bg-stone-50 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-gold-700' : isCompleted ? 'text-stone-700' : 'text-stone-400'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  {isCompleted ? (
                    <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px]">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                  ) : isActive ? (
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  ) : null}
                </div>
                <div className="mt-2">
                  <p
                    className={`text-xs font-bold truncate ${
                      isActive ? 'text-obsidian-900' : 'text-stone-600'
                    }`}
                  >
                    {step.title.split('&')[0]}
                  </p>
                  <p className="text-[10px] text-stone-400 truncate uppercase mt-0.5">
                    {step.tag}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Content Showcase */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 lg:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Explanation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gold-100/70 text-gold-800 text-xs font-bold tracking-wider uppercase">
              <StepIcon className="w-3.5 h-3.5" />
              Étape {currentStep.stepNumber} : {currentStep.tag}
            </div>

            <h3 className="text-2xl font-bold text-obsidian-900 tracking-tight">
              {currentStep.title}
            </h3>

            <p className="text-sm text-stone-600 leading-relaxed font-medium">
              {currentStep.subtitle}
            </p>

            <div className="pt-2 space-y-2.5">
              {currentStep.details.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-40 transition-all"
              >
                Étape Précédente
              </button>
              <button
                disabled={activeStepIndex === PIPELINE_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PIPELINE_STEPS.length - 1, prev + 1))}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-obsidian-900 text-white hover:bg-obsidian-800 disabled:opacity-40 transition-all flex items-center gap-1.5"
              >
                Étape Suivante <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Real Document Screenshot */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl border border-stone-200 bg-stone-50 p-2 overflow-hidden shadow-inner group">
              <div className="relative w-full h-[320px] rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={currentStep.cropImage}
                  alt={currentStep.title}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-white border-t border-stone-200 rounded-b-lg">
                <div className="flex items-center gap-1.5 text-[11px] text-stone-500 font-medium">
                  <Eye className="w-3.5 h-3.5 text-gold-600" />
                  <span>{currentStep.cropCaption}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
