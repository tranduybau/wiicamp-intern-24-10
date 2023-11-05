import React, { memo } from "react";
import { Headphones, ShieldCheck, Truck } from "lucide-react";

import Item from "./Item";

function Delivery() {
  return (
    <div className="lg:mt-[140px] mt-[60px] gap-[88px] container lg:flex md:block justify-between xl:px-[114px] lg:px-[50px] px-0">
      <Item
        classCustom="min-w-[249px]"
        title="FREE AND FAST DELIVERY"
        name="Free delivery for all orders over $140"
        icon={<Truck size={32} />}
      />
      <div className="lg:mt-0 mt-4">
        <Item
          classCustom="min-w-[262px]"
          title="24/7 CUSTOMER SERVICE"
          name="Friendly 24/7 customer support"
          icon={<Headphones size={32} />}
        />
      </div>

      <div className="lg:mt-0 mt-4">
        <Item
          classCustom="min-w-[256px]"
          title="MONEY BACK GUARANTEE"
          name="We return money within 30 days"
          icon={<ShieldCheck size={32} />}
        />
      </div>
    </div>
  );
}
export default memo(Delivery);
