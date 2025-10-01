export interface TabPanelProps {
  index: number;
  content: string;
  selected: number;
}

export default function TabPanel({ index, content, selected }: TabPanelProps) {
  const isSelected = index === selected;
  return (
    <div
      id={`tab-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`tab-${index}`}
      tabIndex={0}
      style={isSelected ? { display: "block" } : { display: "none" }}
    >
      <p>{content}</p>
    </div>
  );
}
