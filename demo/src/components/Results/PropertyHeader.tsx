export default function PropertyHeader(props: any) {
  return (
    <div>
      <div className="text-center mt-16">
        <div className="">
          <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
            {props.info.nickname}
          </h1>
        </div>
        <div className="">
          <h4 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
            {`${props.info.address} ${props.info.city}, ${props.info.state} ${props.info.zip}`}
          </h4>
        </div>
      </div>
    </div>
  );
}
