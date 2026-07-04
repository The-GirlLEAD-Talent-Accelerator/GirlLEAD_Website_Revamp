import TabButton from "./TabButton";

export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-10 mb-6 overflow-x-auto px-4 scrollbar-hide">
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          label={tab}
          active={activeTab === tab}
          onClick={() => onChange(tab)}
        />
      ))}
    </div>
  );
}
