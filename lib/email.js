import nodemailer from 'nodemailer'

const smtpOptions = {
    host: 'smtp.titan.email',
    port: 465,
    secure: true,
    auth: {
        user: "support@boostplus.se",
        pass: "Anders.salman123"
    }
}

export const sendEmail = async(data) => {
    const transporter = nodemailer.createTransport({...smtpOptions});

    return await transporter.sendMail({
        from: {
            name: 'Boost Plus',
            address: 'support@boostplus.se'   
        }, ...data
    }, (err, info) => {
        if(err){
            console.log(err)
        }else{
            return true;
        }
    })
}