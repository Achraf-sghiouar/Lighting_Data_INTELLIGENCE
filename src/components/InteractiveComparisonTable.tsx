'use client';

import React, { useState } from 'react';
import { SKU_COMPARISONS, SkuComparison } from '../data/projectData';
import { CheckCircle2, AlertTriangle, ShieldCheck, Eye, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function InteractiveComparisonTable() {
  const [selectedSku, setSelectedSku] = useState<SkuComparison>(SKU_COMPARISONS[0]);
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
            <h3 className="font-semibold text-obsidian-900 text-lg">
              La Différence Entre Donnée Brute et Donnée PIM
            </h3>
          </div>
          <p className="text-xs text-stone-500 mt-0.5">
            Comparez l'extrait réel du catalogue source avec l'erreur du scraping traditionnel versus la donnée qualifiée finale.
          </p>
        </div>

        {/* View toggle */}
        <div className="inline-flex p-1 bg-stone-200/80 rounded-xl text-xs font-medium shrink-0">
          <button
            onClick={() => setActiveTab('after')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'after'
                ? 'bg-white text-emerald-800 shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Donnée Corrigée & Qualifiée
          </button>
          <button
            onClick={() => setActiveTab('before')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'before'
                ? 'bg-white text-rose-800 shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            Anomalie Initiale
          </button>
        </div>
      </div>

      {/* SKU Selector Pills */}
      <div className="p-4 border-b border-stone-100 bg-stone-50/50 flex gap-2 overflow-x-auto">
        {SKU_COMPARISONS.map((item) => {
          const isSelected = selectedSku.sku === item.sku;
          return (
            <button
              key={item.sku}
              onClick={() => setSelectedSku(item)}
              className={`px-3.5 py-2 rounded-xl text-xs whitespace-nowrap transition-all border flex flex-col items-start ${
                isSelected
                  ? 'bg-white border-gold-500 shadow-sm ring-1 ring-gold-400/30'
                  : 'bg-white/80 border-stone-200 text-stone-600 hover:bg-white hover:border-stone-300'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-gold-500' : 'bg-stone-300'}`} />
                <span className="font-mono font-bold text-obsidian-900">{item.sku}</span>
              </div>
              <span className="text-[10px] text-stone-500 mt-0.5">{item.catalogType}</span>
            </button>
          );
        })}
      </div>

      {/* Comparative View: Source Proof vs Output Data */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Actual Cropped Screenshot from Catalog PDF */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-gold-600" />
                Capture Réelle du Catalogue Source
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-gold-100 text-gold-800">
                {selectedSku.catalogType}
              </span>
            </div>

            <div className="rounded-xl border border-stone-200 bg-stone-50 p-2 overflow-hidden shadow-inner">
              <div className="relative w-full h-48 sm:h-56 rounded-lg overflow-hidden bg-white">
                <Image
                  src={selectedSku.cropImage}
                  alt={selectedSku.cropCaption}
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-500 cursor-zoom-in"
                />
              </div>
              <p className="text-[11px] text-stone-600 p-2 font-medium bg-white rounded-b-lg border-t border-stone-100 mt-1">
                {selectedSku.cropCaption}
              </p>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="text-[10px] font-bold text-gold-800 uppercase tracking-wide flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-gold-600" /> Règle Métier Appliquée
              </span>
              <p className="text-stone-700 mt-1 leading-relaxed">
                {selectedSku.afterState.keyWin}
              </p>
            </div>
          </div>

          {/* Right: Cleaned Data vs Bad Extraction Data */}
          <div className="lg:col-span-7">
            {activeTab === 'after' ? (
              <div className="bg-emerald-50/40 border border-emerald-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                      Fiche Technique PIM Normalisée & Validée
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {selectedSku.afterState.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-obsidian-900">
                    {selectedSku.afterState.productName}
                  </h4>
                  <p className="text-xs text-stone-500 font-mono">
                    SKU: {selectedSku.sku} • {selectedSku.category}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Puissance</span>
                    <p className="text-xs sm:text-sm font-bold text-obsidian-900 font-mono mt-0.5">
                      {selectedSku.afterState.wattage}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Flux Lumineux</span>
                    <p className="text-xs sm:text-sm font-bold text-obsidian-900 font-mono mt-0.5">
                      {selectedSku.afterState.lumens}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Température CCT</span>
                    <p className="text-xs sm:text-sm font-bold text-obsidian-900 font-mono mt-0.5">
                      {selectedSku.afterState.cct}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Étanchéité / Chocs</span>
                    <p className="text-xs sm:text-sm font-bold text-obsidian-900 font-mono mt-0.5">
                      {selectedSku.afterState.ipIk}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Dimensions</span>
                    <p className="text-xs sm:text-sm font-bold text-obsidian-900 font-mono mt-0.5">
                      {selectedSku.afterState.dimensions}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-emerald-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Gradation / Protocole</span>
                    <p className="text-xs sm:text-sm font-bold text-obsidian-900 font-mono mt-0.5">
                      {selectedSku.afterState.control}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-emerald-950 bg-white p-3.5 rounded-lg border border-emerald-100 leading-relaxed">
                  <span className="font-bold">Intégrité de la recherche à facettes :</span> Les acheteurs et bureaux d'études peuvent immédiatement filtrer ce produit par sa puissance réelle sans risque d'erreur d'approvisionnement.
                </div>
              </div>
            ) : (
              <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-rose-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                      Anomalie Générée par l'Extraction Conventionnelle
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                    {selectedSku.beforeState.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg border border-rose-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Puissance Détectée à tort</span>
                    <p className="text-sm font-bold text-rose-600 font-mono mt-0.5">
                      {selectedSku.beforeState.wattage}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-rose-100 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-stone-400">Flux Lumineux Détecté</span>
                    <p className="text-sm font-bold text-rose-600 font-mono mt-0.5">
                      {selectedSku.beforeState.lumens}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-stone-700 bg-white p-4 rounded-lg border border-rose-100 space-y-1.5 leading-relaxed">
                  <p className="font-semibold text-rose-900">
                    Origine du piège technique :
                  </p>
                  <p className="text-stone-600">
                    {selectedSku.beforeState.issue}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
