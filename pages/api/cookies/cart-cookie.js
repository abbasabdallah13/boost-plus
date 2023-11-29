




export default async function handler (req,res){
    try {
        if(req.method === "POST"){
            const { cartItems, totalPrice } = req.body;
    
            const oneDayFromNow = new Date();
            oneDayFromNow.setTime(oneDayFromNow.getTime() + 24 * 60 * 60 * 1000)
    
            const cookieValue = `{cartItems:${cartItems}, totalPrice:${totalPrice}}`
            
            res.setHeader(
                'Set-Cookie',
                `cart=${cookieValue}; expires=${oneDayFromNow.toUTCString()}; path=/`
            )
    
            res.status(200).json({"success": true})
        }else if(req.method === "GET"){
            const cookieValue = req.headers.cookie 
                ? req.headers.cookie.split('; ').find(row => row.startsWith('cart=')).split('=')[1] 
                : null

            res.status(200).json({ cookieValue })
        }

    } catch (error) {
     console.log(error.message)   
    }
}