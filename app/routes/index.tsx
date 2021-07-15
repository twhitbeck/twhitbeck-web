import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "twhitbeck | Home",
    description: "The homepage of twhitbeck.com",
  };
};

export default function Index() {
  return (
    <div className="pt-8">
      <h1>Home</h1>
    </div>
  );
}
