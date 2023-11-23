import AdminReceiptTemplate from "../../emails/AdminReceiptTemplate";
import ReceiptTemplate from "../../emails/ReceiptTemplate";
import { sendEmail } from "../../lib/email";
import { render } from '@react-email/render'


export default async function handler(req,res){

    if(req.method === "POST"){
        const { totalPrice, paymentMethod, userDetails : { firstName, lastName, email }, cartItems, pickupDateAndTime } = JSON.parse(req.body);
        await sendEmail({
            to: email,
            subject: 'Payment Confirmed - Thank You for Your Order',
            html: render(ReceiptTemplate({firstName, lastName, totalPrice, paymentMethod, cartItems, pickupDateAndTime}))
        })
        await sendEmail({
            to: email,
            subject: 'New Order',
            html: render(AdminReceiptTemplate({firstName, lastName, totalPrice, paymentMethod, cartItems, pickupDateAndTime}))
        })
        res.send('Email sent')
    }
}