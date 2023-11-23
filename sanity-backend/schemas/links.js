export const links = {
    name: 'links',
    title:'Links',
    type: 'document',
    fields: [
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string'
        },
        {
            name: 'voucher',
            title: 'Voucher',
            type: 'string'
        },
        {
            name: 'paymentMethod', 
            title: 'Payment Method',
            type: 'string',
        },
        {
            name: 'pickupTime', 
            title: 'Date and Time for Pickup',
            type: 'string',
            defaultValue: 'n/a'
        },         
        {
            name: 'link', 
            title: 'Link',
            type: 'string',
        },
        {
            name: 'purchaseDate', 
            title: 'Purchase Date',
            type: 'string',
        }, 
        {
            name: 'status', 
            title: 'Status',
            type: 'string',
        },
    ]

}