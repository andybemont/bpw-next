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
          <div className="grow text-center rounded-xl  m-1  leading-none">
            {isDateBooked && (
              <p className="bg-pink-600 text-primary-50 rounded-xl pt-1">
                Not available!
              </p>
            )}
            {!isDateBooked && (
              <p className="bg-white/50 text-pink-800 rounded-xl pt-1 border-2 border-pink-600">
                We're available!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
