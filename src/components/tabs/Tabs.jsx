import TabButton from "./TabButton";

export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex justify-center gap-6 sm:gap-10 mb-6">
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
