import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_live_51MGoAyDybJk3SP2Ch0GbIwt2ZerdA0Ms7pwGcG0CvSWNTfYOE2Pf0rFZQCkJJksWbK5t1t93OEkqd1OoxNeu4Nza00PFcVVh7l');
    }

    return stripePromise;
}

export default getStripe;