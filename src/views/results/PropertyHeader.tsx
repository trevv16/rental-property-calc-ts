import React from "react";

export default function PropertyHeader(props: any) {

	return (
        <div>
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                        {props.info.name}
                    </h2>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <h4 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                        {`${props.info.streetAddress} ${props.info.city}, ${props.info.state} ${props.info.zipCode}`}
                    </h4>
                </div>
            </div>
        </div>
    );
}