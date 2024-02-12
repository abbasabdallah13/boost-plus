import AdminReceiptTemplate from "../../emails/AdminReceiptTemplate";
import PickupConfirmationTemplate from "../../emails/PickupConfirmationTemplate";
import ReceiptTemplate from "../../emails/ReceiptTemplate";
import { sendEmail } from "../../lib/email";
import { render } from '@react-email/render'


export default async function handler(req,res){

    if(req.method === "POST"){
        const { totalPrice, paymentMethod, userDetails : { firstName, lastName, email }, cartItems, pickupDateAndTime } = JSON.parse(req.body);
        console.log(paymentMethod)
        if(paymentMethod === "Pickup"){
            await sendEmail({
                to: email,
                subject: 'Pickup Order Confirmed - Thank You for Your Order',
                html: render(PickupConfirmationTemplate({firstName, lastName, totalPrice, paymentMethod, cartItems, pickupDateAndTime}))
            })
        }else {            
            await sendEmail({
                to: email,
                subject: 'Payment Confirmed - Thank You for Your Order',
                html: render(ReceiptTemplate({firstName, lastName, totalPrice, paymentMethod, cartItems, pickupDateAndTime}))
            })
        }
        await sendEmail({
            to: "abbasab13@outlook.com",
            subject: 'New Order',
            html: render(AdminReceiptTemplate({firstName, lastName, totalPrice, paymentMethod, cartItems, pickupDateAndTime}))
        })
        res.send('Email sent')
        console.log('Email sent')
    }
}