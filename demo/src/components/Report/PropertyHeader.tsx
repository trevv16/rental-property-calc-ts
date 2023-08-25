import React from "react";
import { Property } from "../../lib/deal";

type PropertyHeaderProps = {
  property: Property;
};

export default function PropertyHeader({ property }: PropertyHeaderProps) {
  return (
    <div>
      <div className="text-center mt-16">
        <div className="">
          <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
            {property.nickname}
          </h1>
        </div>
        <div className="">
          <h4 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
            {`${property.address} ${property.address2} ${property.city}, ${property.state} ${property.zip}`}
          </h4>
        </div>
      </div>
    </div>
  );
}
