import React from 'react';
import { GLOBAL_KPIS } from '../data/projectData';
import StorytellingPipeline from '../components/StorytellingPipeline';
import InteractiveComparisonTable from '../components/InteractiveComparisonTable';
import PowerBiDashboardView from '../components/PowerBiDashboardView';
import {
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  BarChart2,
  FileCheck2
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen pb-24">
      {/* Top Navbar */}
      <nav className="border-b border-stone-200/80 bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-obsidian-900 flex items-center justify-center text-gold-400 font-bold text-sm shadow-sm">
              ✦
            </div>
            <div>
              <span className="font-bold text-obsidian-900 text-sm tracking-tight">
                LIGHTING DATA INTELLIGENCE
              </span>
              <span className="text-[10px] block text-stone-500 font-mono -mt-1">
                PIM Engineering Case Study
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              16 781 Produits Qualifiés
            </span>
            <a
              href="#comparatif"
              className="px-3.5 py-1.5 rounded-xl bg-obsidian-900 hover:bg-obsidian-800 text-white text-xs font-semibold transition-all shadow-sm"
            >
              Explorer les Données
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Ingénierie de Données & Digitalisation Catalogue
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-obsidian-900 tracking-tight leading-[1.15]">
            Comment transformer des catalogues complexes en une{' '}
            <span className="text-gold-700 underline decoration-gold-400/50 underline-offset-8">
              base PIM de 16 781 références
            </span>{' '}
            avec 0% d'erreur.
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
            De l'échec des scrapers traditionnels (hallucinations photométriques et collisions de colonnes) à la création d'un moteur géométrique spatial capable de dissocier les structures multi-colonnes et matrices de fabricants.
          </p>
        </div>
      </section>

      {/* KPI Stats Box inspired by the reference site */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-obsidian-900 rounded-3xl p-8 text-white shadow-xl border border-stone-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-800 gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-gold-400 font-bold tracking-widest">
                  — RÉSULTATS CHIFFRÉS DU PROJET
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mt-1 text-stone-100">
                  Des chiffres mesurables, pas des promesses.
                </h2>
              </div>
              <span className="text-xs text-stone-400 max-w-xs leading-relaxed">
                Consolidation finale des 3 grandes familles de catalogues techniques au format PIM maître.
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {GLOBAL_KPIS.map((kpi, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-gold-400 tracking-tight">
                      {kpi.value}
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80">
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-xs font-bold uppercase text-stone-300 tracking-wider">
                    {kpi.label}
                  </p>
                  <p className="text-[11px] text-stone-400 leading-tight">
                    {kpi.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Stepper Pipeline */}
      <section className="px-6 py-12 bg-stone-100/60 border-y border-stone-200/80">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-gold-700 uppercase tracking-widest">
              — LE PARCOURS DE RÉSOLUTION (ÉTAPES 01 À 05)
            </span>
            <h2 className="text-3xl font-extrabold text-obsidian-900 tracking-tight">
              Le Défi Étape par Étape
            </h2>
            <p className="text-sm text-stone-600">
              Découvrez concrètement avec les extraits réels de catalogues pourquoi chaque étape a nécessité une solution sur mesure.
            </p>
          </div>

          <StorytellingPipeline />
        </div>
      </section>

      {/* Interactive Before/After Data Table */}
      <section id="comparatif" className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-gold-700 uppercase tracking-widest">
                — PREUVE PAR L'EXEMPLE
              </span>
              <h2 className="text-3xl font-extrabold text-obsidian-900 tracking-tight mt-1">
                La Différence Entre Donnée Brute et Donnée PIM
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-sm">
              Voici 6 cas concrets où un algorithme classique induit les acheteurs en erreur, et comment notre pipeline rétablit la réalité produit avec le zoom réel du document source.
            </p>
          </div>

          <InteractiveComparisonTable />
        </div>
      </section>

      {/* Power BI Dashboard View */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-gold-700 uppercase tracking-widest">
                — VUE ANALYTIQUE DE LA BASE
              </span>
              <h2 className="text-3xl font-extrabold text-obsidian-900 tracking-tight mt-1">
                Couverture Globale des Attributs
              </h2>
            </div>
            <p className="text-xs text-stone-500 max-w-sm">
              Taux de remplissage et distribution des 16 781 références qualifiées prêtes pour l'e-commerce et l'ERP.
            </p>
          </div>

          <PowerBiDashboardView />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 mt-16 pt-8 pb-12 px-6 text-center text-xs text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Lighting Data Intelligence. Pipeline PIM déployé sur 16 781 références.</p>
          <div className="flex items-center gap-4 text-stone-600 font-medium">
            <span>Catalogue Matriciel (13 579)</span>
            <span>•</span>
            <span>Catalogue Multi-Colonnes (3 080)</span>
            <span>•</span>
            <span>Sécurité & BAES (122)</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
