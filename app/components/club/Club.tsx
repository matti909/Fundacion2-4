import Image from "next/image";
import React from "react";

const Club = () => {
  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          repellendus voluptatum dolorem sequi accusamus praesentium obcaecati
          nostrum consequatur. Inventore, aperiam. Ea in incidunt ipsa ullam,
          consequuntur sequi quos commodi rerum!
        </p>
      </div>
      <div style={{paddingInlineStart: '2rem'}}>
        <Image src={'/assets/depo.webp'} alt="depo" width={350} height={550}/>

        
      </div>
    </>
  );
};

export default Club;
