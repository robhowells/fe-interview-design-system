export interface TabPanelProps {
  id: number;
  content: string;
  selected: number;
}

export default function TabPanel({ id, content, selected }: TabPanelProps) {
  const isSelected = id === selected;
  return (
    <div
      id={`tab-panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      tabIndex={0}
      style={isSelected ? { display: "block" } : { display: "none" }}
    >
      <p>{content}</p>
    </div>
  );
}
