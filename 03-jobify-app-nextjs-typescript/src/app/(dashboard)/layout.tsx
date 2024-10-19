type TypeProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: TypeProps) {
  return (
    <div>
      <>
        <h1> dashboard layout</h1>
        {children}
      </>
    </div>
  );
}
