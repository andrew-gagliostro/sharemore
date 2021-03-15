import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import PlaceBidForm from "../components/PlaceBidForm";

const PlaceBid = () => {



    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                
                    <section>
                        <h2>Time to Place Bid?</h2>
                        <PlaceBidForm />
                    </section>
                
            </AmplifyAuthenticator>
        </section>
    )
}

export default PlaceBid
