import React from "react";

export default function PropertyHeader(props: any) {

	return (
        <div>
            <div className="text-center mt-16">
                <div className="">
                    <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
                        {props.info.name}
                    </h1>
                </div>
                <div className="">
                    <h4 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate">
                        {`${props.info.streetAddress} ${props.info.city}, ${props.info.state} ${props.info.zipCode}`}
                    </h4>
                </div>
            </div>
        </div>
    );
}