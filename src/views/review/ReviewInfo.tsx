import React from "react";

export default function ReviewInfo(props: any) {

	return (
        <div>
            <div className="prose sm:prose-xl">
                <div className="info">
                    <h3 className="m-2">Info</h3>
                    <h5>{`Property Name: ${props.infoname}`}</h5>
                    <h5>{`Street Address: ${props.infostreetAddress}`}</h5>
                    <h5>{`City: ${props.infocity}`}</h5>
                    <h5>{`State: ${props.infostate}`}</h5>
                    <h5>{`Zip Code: ${props.infozipCode}`}</h5>
                </div>
            </div>
        </div>
    );
}