import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/_home/')({
  component: Index
});

function Index() {
  return (
    <>
      <div>Index</div>
    </>
  );
}