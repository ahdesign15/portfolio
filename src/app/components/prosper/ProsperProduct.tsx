// Prosper XO: 02 — The Product
import imgImageEngage from '../../../imports/ProsperUpdate/954ce7dbc798463a21de10112b0b21d7fd19179e.png';
import { CaseStudySection } from './ProsperShared';

const stats = [
  { value: '45', label: 'Screens designed for investor demo' },
  { value: '5', label: 'Act flow structure' },
  { value: '3', label: 'User contexts, one system' },
];

export function ProsperProduct() {
  return (
    <CaseStudySection
      sectionLabel="02 — The Product"
      heading="A five-act flow, one shared navigation."
    >
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map(({ value, label }) => (
          <div
            key={value}
            className="bg-white border border-[#e8e5e0] rounded-[10px] flex flex-col items-center py-6 px-6 gap-2"
          >
            <span className="font-bold text-[42px] text-[#2a2020] tracking-[-1.26px] leading-[46.2px]">
              {value}
            </span>
            <span className="text-[11px] text-[#9e9393] text-center leading-[15.95px]">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Body copy */}
      <p className="text-[#7a6f6f] text-[16px] leading-[27.2px] max-w-[641px]">
        The fan experience needed to feel like a story, not an app. I structured it as five acts —{' '}
        <strong className="font-bold text-[#2a2020]">
          Discover, Engage, Quest, Reward, Manage
        </strong>{' '}
        — mapped across a single shared bottom nav so every user, fan or artist, lived in the same shell.
      </p>

      <p className="text-[#7a6f6f] text-[16px] leading-[27.2px] max-w-[641px]">
        Artists don't get a separate app. They get Prosper's admin tool — a management layer
        accessed from their profile where they can view analytics, track performance, and
        manage their presence. Same nav, same system, a different door. And critically: no
        gatekeeping. Unlike other platforms that lock data behind follower thresholds or
        premium tiers, every artist on Prosper XO gets full access to their analytics regardless
        of metrics.
      </p>

      <p className="text-[#7a6f6f] text-[16px] leading-[27.2px] max-w-[641px]">
        The third iteration brought what the first two were missing: animation and motion
        design, positive response feedback, support flows, and the kind of interaction depth
        that makes users feel like the platform is responding to them, not just displaying to
        them.
      </p>

      {/* Mockup visual */}
      <div
        className="rounded-[16px] overflow-hidden flex flex-col items-center justify-center gap-0"
        style={{
          background: 'linear-gradient(118deg, rgb(196,181,168) 5%, rgb(210,186,182) 95%)',
          paddingTop: '153.75px',
          paddingBottom: '31.25px',
        }}
      >
        <div className="flex flex-col items-center gap-4 w-[267px]">
          <div
            className="border border-[rgba(168,85,247,0.22)] rounded-[32px] overflow-hidden"
            style={{ background: '#0a0612', height: '536px', width: '100%' }}
          >
            <img
              src={imgImageEngage}
              alt="Engage screen"
              className="w-full h-full object-cover opacity-85"
            />
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <span className="font-mono text-[#a855f7] text-[9px] tracking-[0.9px] uppercase">
              Engage
            </span>
            <span className="text-[#8b83a3] text-[10px] text-center">
              Tip, collect, and quest
            </span>
          </div>
        </div>
        <span className="font-['Poppins',sans-serif] italic text-white/90 text-[15px] tracking-[0.5px] mt-24" style={{ fontWeight: 600 }}>
          Prosper XO
        </span>
      </div>
    </CaseStudySection>
  );
}
