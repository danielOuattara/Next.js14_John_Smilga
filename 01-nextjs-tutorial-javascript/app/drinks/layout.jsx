export const metadata = {
  title: "Next.js Javascript | Client",
  description: "Fetching drinks made on this page",
};

export default function DrinksLayout({ children }) {
  return (
    <div className="max-w-xl ">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>npx create-next-app@latest nextjs-tutorial</code>
        </pre>
      </div>
      {children}
    </div>
  );
}
