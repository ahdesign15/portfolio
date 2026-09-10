import { CaseStudySection, InsightBlock } from './ProsperShared';

const colorTokens = [
  { hex: '#10061C', label: 'Base', textColor: 'rgba(255,255,255,0.8)' },
  { hex: '#250F42', label: 'Artist', textColor: 'rgba(255,255,255,0.8)' },
  { hex: '#F2943C', label: 'Orange', textColor: '#2a1a00' },
  { hex: '#E3E11C', label: 'Yellow', textColor: '#2a2800' },
  { hex: '#EA0F8B', label: 'Pink', textColor: 'rgba(255,255,255,0.8)' },
  { hex: '#4393D0', label: 'Blue', textColor: 'rgba(255,255,255,0.8)' },
  { hex: '#93C840', label: 'Green', textColor: '#1a2a00' },
  { hex: '#DF4726', label: 'Red', textColor: 'rgba(255,255,255,0.8)' },
];

const typeWeights = ['Light 300', 'Regular 400', 'Medium 500', 'Semibold 600'];
const typeScale = ['Heading 1', 'Heading 2', 'Body', 'Caption'];
const typeColors = ['#2a2020', '#2a2020', '#7a6f6f', '#9e9393'];

const componentTags = [
  { label: 'Reward', bg: 'rgba(227,225,28,0.15)', color: '#e3e11c' },
  { label: 'Unlocked', bg: 'rgba(147,200,64,0.15)', color: '#93c840' },
  { label: 'Limited', bg: 'rgba(245,158,11,0.15)', color: '#f59e0b' },
  { label: 'Locked', bg: 'rgba(239,68,68,0.15)', color: '#ef4444' },
  { label: 'Points', bg: 'rgba(67,147,208,0.15)', color: '#4393d0' },
  { label: 'Live', bg: 'rgba(234,15,139,0.15)', color: '#ea0f8b' },
];

export function ProsperDesignSystem() {
  return (
    <CaseStudySection sectionLabel="04 — Design System" heading="The foundation that made everything else possible.">
      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        Through the iteration process, I began to understand something fundamental: a
        design system isn't a nice-to-have at the start — it's what makes speed possible later.
        Especially when your workflow includes AI-assisted tools.
      </p>

      <p className="text-[#7a6f6f] text-[15px] md:text-[16px] leading-[27.2px]">
        I worked with the brand designer to establish the typographic foundation — testing
        styles, weights, and pairings until we had a scale that worked across every context.
        From there I built out the full system: color tokens for three distinct surfaces, component
        primitives, gradient treatments, spacing, and the visual language that became Prosper XO's identity.
      </p>

      {/* 1 col mobile, 3 col md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
        {/* Col 1: Typography & Color */}
        <div className="rounded-[10px] p-4 md:p-5 flex flex-col gap-3 overflow-hidden" style={{ background: '#0a0612', border: '1px solid #e8e5e0' }}>
          <div className="border-b border-[#e8e5e0] pb-3">
            <span className="font-bold text-[9.5px] text-[#9e9393] tracking-[0.95px] uppercase">Typography &amp; Color</span>
          </div>
          {typeWeights.map((w) => (
            <p key={w} className="text-[#2a2020] text-[16px] md:text-[22px] leading-[26.4px] m-0">{w}</p>
          ))}
          <div className="flex flex-col mt-1">
            {typeScale.map((s, i) => (
              <p key={s} className="m-0" style={{ color: typeColors[i], fontSize: i === 0 ? '15px' : i === 1 ? '13px' : i === 2 ? '12px' : '10px' }}>{s}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {colorTokens.map(({ hex, label, textColor }) => (
              <div key={hex} className="h-10 rounded-[7px] p-2 flex flex-col justify-end" style={{ background: hex }}>
                <span style={{ color: textColor, fontSize: '8px', fontWeight: 700 }}>{hex}</span>
                <span style={{ color: textColor, fontSize: '8px', fontWeight: 700 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Components */}
        <div className="rounded-[10px] p-4 md:p-5 flex flex-col gap-3 overflow-hidden" style={{ background: '#0a0612', border: '1px solid #e8e5e0' }}>
          <div className="border-b border-[#e8e5e0] pb-3">
            <span className="font-bold text-[9.5px] text-[#9e9393] tracking-[0.95px] uppercase">Components</span>
          </div>
          <span className="font-bold text-[10px] text-[#9e9393] tracking-[0.8px] uppercase">Buttons</span>
          <div
            className="flex items-center justify-center py-3 rounded-[10px] border border-[#ea0f8b] text-white text-[12px] font-semibold w-full"
            style={{ background: 'linear-gradient(76deg, rgba(197,222,240,0.63) 9%, rgba(28,62,87,0.63) 86%)' }}
          >
            Primary CTA
          </div>
          <div className="flex items-center justify-center py-3 rounded-[10px] border border-[#9b91a8] text-[#513f68] text-[12px] w-full">Secondary</div>
          <div className="flex items-center justify-center py-3 rounded-[10px] border border-[rgba(168,85,247,0.12)] text-[#9eaab9] text-[12px] opacity-40 w-full">Disabled</div>
          <span className="font-bold text-[10px] text-[#9e9393] tracking-[0.8px] uppercase mt-1">Tags</span>
          <div className="flex flex-wrap gap-1">
            {componentTags.map(({ label, bg, color }) => (
              <span key={label} className="px-2 py-1 rounded-full text-[10px]" style={{ background: bg, color }}>{label}</span>
            ))}
          </div>
        </div>

        {/* Col 3: Signature Patterns */}
        <div className="rounded-[10px] p-4 md:p-5 flex flex-col gap-3 overflow-hidden" style={{ background: '#0a0612', border: '1px solid #e8e5e0' }}>
          <div className="border-b border-[#e8e5e0] pb-3">
            <span className="font-bold text-[9.5px] text-[#9e9393] tracking-[0.95px] uppercase">Signature Patterns</span>
          </div>
          <span className="font-bold text-[10px] text-[#9e9393] tracking-[0.8px] uppercase">Gradient Title</span>
          <p
            className="font-bold text-[18px] md:text-[20px] leading-[26px] bg-clip-text m-0"
            style={{ color: 'transparent', backgroundImage: 'linear-gradient(270deg, #4393D0 0%, #93C840 25%, #E3E11C 50%, #F2943C 75%, #EA0F8B 100%)', WebkitBackgroundClip: 'text' }}
          >
            Prosper XO
          </p>
          <span className="font-bold text-[10px] text-[#9e9393] tracking-[0.8px] uppercase mt-1">Create FAB</span>
          <div className="flex items-center gap-3">
            <div
              className="rounded-[24px] flex items-center justify-center size-12 shrink-0"
              style={{ background: 'linear-gradient(135deg, #EA0F8B 0%, #F2943C 25%, #E3E11C 50%, #93C840 75%, #4393D0 100%)' }}
            >
              <span className="text-white text-[22px] leading-none" style={{ fontWeight: 300 }}>+</span>
            </div>
            <span className="text-[#9e9393] text-[11px]">Global create action</span>
          </div>
          <span className="font-bold text-[10px] text-[#9e9393] tracking-[0.8px] uppercase mt-1">Avatar Scale</span>
          <div className="flex items-end gap-2 justify-center py-2">
            {[24, 48, 64].map((size) => (
              <div
                key={size}
                className="rounded-full shrink-0"
                style={{ width: size, height: size, background: 'linear-gradient(180deg, #9b91a8 0%, #513f68 46.824%, #140824 100%)' }}
              />
            ))}
          </div>
        </div>
      </div>

      <InsightBlock label="Design system insight" title="Why the system came first.">
        <p className="m-0 mb-3">
          When you're a founding designer working at speed, the design system isn't documentation for a
          future team — it's the thing that keeps your own output consistent across 45+ screens and three user contexts.
        </p>
        <p className="m-0">
          It also became critical for working with Claude Code. Without defined tokens, components, and
          patterns, AI-generated output has nothing to measure against. The system gave every generated
          screen a standard to meet.
        </p>
      </InsightBlock>
    </CaseStudySection>
  );
}
