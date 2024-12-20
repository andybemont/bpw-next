export default function PartialPanel(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <div className="sm:animate-slide xs:w-full sm:w-1/3 sm:min-w-[392px] bg-primary-50/50 text-primary-900 p-2 tracking-wide max-h-full overflow-y-auto">
      {children}
    </div>
  );
}
