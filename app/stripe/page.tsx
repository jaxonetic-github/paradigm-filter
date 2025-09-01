'use client'
import '@stripe/stripe-js';
import Script from 'next/script';
import {
    EmbeddedCheckout,
  EmbeddedCheckoutProvider,
  PaymentElement,
  Elements,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import getStripe from "@/_utils/stripe/stripe-singleton.ts";

import Checkout from '@/components/stripe/checkoutform.tsx'
/*
herbert henry harrison classified as white- youtubeTherapy Session with Sabir Bey- How Irish People become s0-called White?
*/

// @ts-ignore
  export default function RootLayout() {

    const clientSecret = process.env.STRIPE_SECRET_KEY ;

  //const teachers = (teacherArray:any) => initialStoreState.resourcesData.youTubeResources.filter((resource)=>(resource.generalCategory[0]===discipline)|| discipline==='all');

  return (
 <div className="mx-auto flex-row max-w-xl items-center">

    <form action="/api/checkout_sessions" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
    </form>
        <Elements
          stripe={getStripe()}
          options={ { clientSecret }}
        >



     
        </Elements>
     
       


    </div>
);
}
{/*<stripe-buy-button
  buy-button-id="buy_btn_1RtTZpAqNzQ8LyVVC6eGpxDN"
  publishable-key="pk_test_51RtG33AqNzQ8LyVVmk5rvUChjkfhmTqHKkyn0Z2DXhu0qva4D7a086Zhmd7AM9P01ugj2vqyBEGKPBNkvUIJEk3600qJQ3xl0v"
>
</stripe-buy-button>
<stripe-buy-button
  buy-button-id="buy_btn_1RtWc7AqNzQ8LyVV0rsJpteQ"
  publishable-key="pk_test_51RtG33AqNzQ8LyVVmk5rvUChjkfhmTqHKkyn0Z2DXhu0qva4D7a086Zhmd7AM9P01ugj2vqyBEGKPBNkvUIJEk3600qJQ3xl0v"
>
</stripe-buy-button>*/}
