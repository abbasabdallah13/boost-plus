import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_TEST_SECRET_KEY)
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
          res.header('Content-Type', 'application/json');
          res.header('Content-Encoding', 'utf-8');
          res.status(200).json({message: 'hello from server'});
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}