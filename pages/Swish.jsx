import React, { useEffect, useState } from "react";

const Swish = () => {
    const [message, setMessage] = useState(null);
    

    useEffect(() => {
      fetch('/swish')
        .then(res => console.log(res))
    }, []);
    
  return (
  <div className="mt-60">
    <h1>message:{message}</h1>
  </div>
  )
};

export default Swish;
