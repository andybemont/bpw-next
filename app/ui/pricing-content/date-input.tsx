export default function DateInput(props: {
  controlId: string;
  register: (id: string) => any;
  isDateBooked: boolean;
}) {
  const { controlId, register, isDateBooked } = props;
  return (
    <div
      className={`transition-all ease-in-out outline outline-1 outline-primary-950 rounded-xl mb-2`}
    >
      <div className="font-title pl-4">
        <div className="flex flex-row">
          <p className="text-left pt-1 pr-1">
            <label htmlFor={controlId}>Date:</label>
          </p>
          <div className="w-36">
            <input
              className="float-left p-0 pl-1 m-1 bg-transparent text-primary-950"
              id={controlId}
              type="date"
              defaultValue={"2026-01-01"}
              {...register(controlId)}
            />
          </div>
          {isDateBooked && (
            <p className="text-left text-red-800 pt-1 pr-1">
              Sorry! We're not available on this date.
            </p>
          )}
          {!isDateBooked && (
            <p className="text-left pt-1 pr-1">We're available!</p>
          )}
        </div>
      </div>
    </div>
  );
}
