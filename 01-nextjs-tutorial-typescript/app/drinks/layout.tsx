import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Javascript | Client",
  description: "Fetching drinks made on this page",
};

type TypeDrinksLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function DrinksLayout({ children }: TypeDrinksLayoutProps) {
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
