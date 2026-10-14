'use client';

import React, { useState } from 'react';
import { POWER_BI_STATS } from '../data/projectData';
import { BarChart3, PieChart, ShieldCheck, CheckCircle2, TrendingUp, Layers, Filter } from 'lucide-react';

export default function PowerBiDashboardView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'high' | 'medium'>('all');

  const filteredAttributes = POWER_BI_STATS.coverageByAttribute.filter((attr) => {
    if (activeFilter === 'high') return attr.percentage >= 80;
    if (activeFilter === 'medium') return attr.percentage < 80;
    return true;
  });

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Header Bar */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-gold-100 text-gold-800">
            <BarChart3 className="w-5 h-5 text-gold-700" />
          </div>
          <div>
            <h3 className="font-bold text-obsidian-900 text-base flex items-center gap-2">
              Tableau de Bord Analytique (Style Power BI)
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                100% Qualifié
              </span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Vue synthétique de la couverture des attributs techniques sur les 16 781 références de la base de données PIM.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-stone-400 flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" /> Filtre :
          </span>
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-obsidian-900 text-white font-semibold shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Tous ({POWER_BI_STATS.coverageByAttribute.length})
          </button>
          <button
            onClick={() => setActiveFilter('high')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeFilter === 'high'
                ? 'bg-obsidian-900 text-white font-semibold shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Couverture &gt; 80%
          </button>
          <button
            onClick={() => setActiveFilter('medium')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              activeFilter === 'medium'
                ? 'bg-obsidian-900 text-white font-semibold shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Filtres Électriques
          </button>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Horizontal Progress Bars (Power BI bar chart style) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Taux de Remplissage par Attribut Technique PIM
            </span>
            <span className="text-[11px] font-mono text-stone-400">
              Sur 16 781 SKUs
            </span>
          </div>

          <div className="space-y-3">
            {filteredAttributes.map((attr, idx) => (
              <div key={idx} className="space-y-1 group">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-obsidian-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    {attr.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-stone-400 text-[11px]">
                      {attr.count}
                    </span>
                    <span className="font-mono font-bold text-obsidian-900 w-12 text-right">
                      {attr.percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden p-0.5 border border-stone-200/60">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${attr.color}`}
                    style={{ width: `${attr.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Family Distribution Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Répartition par Typologie Catalogue
            </span>
            <span className="text-[11px] font-mono text-stone-400">
              3 Familles
            </span>
          </div>

          <div className="space-y-3">
            {POWER_BI_STATS.distributionByFamily.map((fam, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-stone-50 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-obsidian-900">
                    {fam.name}
                  </span>
                  <span className="text-xs font-mono font-bold text-gold-700 bg-gold-100 px-2 py-0.5 rounded-md">
                    {fam.share}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span>{fam.count}</span>
                  <span className="text-emerald-700 font-sans font-semibold">100% Qualifié</span>
                </div>
                <p className="text-[11px] text-stone-600 leading-tight pt-1">
                  {fam.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Card Summary */}
          <div className="p-3.5 rounded-xl bg-gold-50/80 border border-gold-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
            <div className="text-xs text-stone-700">
              <span className="font-bold text-gold-900 block">Standardisation Industrielle</span>
              Toutes les données ont été alignées sur un schéma uniforme de 26 colonnes, permettant l'interopérabilité immédiate avec les systèmes ERP et moteurs e-commerce.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
