import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import PlaceBidForm from "../components/PlaceBidForm";

const PlaceBid = () => {



    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                
            </AmplifyAuthenticator>
        </section>
    )
}

export default PlaceBid
