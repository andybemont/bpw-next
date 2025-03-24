export default function PartialPanel(props: {
  className?: string;
  children: React.ReactNode;
}) {
  const { className, children } = props;

  return (
    <div
      className={`${
        className ? className : ""
      } xs:w-full sm:w-1/3 sm:min-w-[392px] bg-primary-50/70 text-primary-900 p-2 tracking-wide max-h-full overflow-y-auto`}
    >
      {children}
    </div>
  );
}
