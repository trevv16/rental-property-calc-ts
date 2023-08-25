export default function ReviewInfo(props: any) {
  return (
    <div>
      <div className="prose sm:prose-xl">
        <div className="info">
          <h3 className="m-2">Info</h3>
          <h5>{`Property Name: ${props.info.nickname}`}</h5>
          <h5>{`Street Address: ${props.info.address}`}</h5>
          <h5>{`City: ${props.info.city}`}</h5>
          <h5>{`State: ${props.info.state}`}</h5>
          <h5>{`Zip Code: ${props.info.zip}`}</h5>
        </div>
      </div>
    </div>
  );
}
