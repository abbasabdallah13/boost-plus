import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51MQSvKIoCYV6KNeUxR0juuHq3FhEFXSUtzzGdTxOp8ntTPHUVOkVIwqpC7Wz8B9SOtHGVJWYaVekl3kiV139YTfo00jE85i609')
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const params = {
            submit_type:'pay',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            line_items:req.body.map(el=> {
                return {
                    price_data: {
                        currency: 'sek',
                        product_data: {
                            name: el.fromSelect.split(',')[0]+' '+ el.voucherName,
                            description: el.url,
                        },
                        unit_amount: Number(el.fromSelect.split(',')[1])*100,
                        },
                        adjustable_quantity: {
                            enabled: false,
                        },
                        quantity: 1
                }
            }),
            mode: 'payment',
            success_url: `${req.headers.origin}/success`,
            cancel_url: `${req.headers.origin}/`,
          }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
          res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}