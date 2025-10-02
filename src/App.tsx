import Tabs from "./components/organisms/Tabs/Tabs";
export default function App() {
  const tabData = [
    {
      id: 1,
      text: "Emails",
      content: "Tab 1 content",
      badge: {
        text: "Info",
        variant: "neutral",
      },
    },
    {
      id: 2,
      text: "Files",
      content: "Tab 2 content",
      badge: {
        text: "Success",
        variant: "positive",
      },
    },
    {
      id: 3,
      text: "Edits",
      content: "Tab 3 content",
      badge: {
        text: "Warning",
        variant: "negative",
      },
    },
    {
      id: 4,
      text: "Downloads",
      content: "Tab 4 content",
    },
    {
      id: 5,
      text: "Documents",
      content: "Tab 5 content",
    },
  ];

  return (
    <div className="container">
      <h1>Tabs demo</h1>
      <Tabs data={tabData} variant="pill" />
      <Tabs data={tabData} variant="underline" />
    </div>
  );
}
