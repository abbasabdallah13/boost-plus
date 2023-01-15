import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe('pk_test_51MQSvKIoCYV6KNeUoRua97TgNCgdnTsB92YX6f4FNBSdpNsobHJoAqOtvYU0KFkCvwfLPYQzs14OA2g56U6XCa5x003g0kIPSz');
    }

    return stripePromise;
}

export default getStripe;