import { defineQuery } from "next-sanity";
import { CouponCode } from "./coupons";
import { sanityFetch } from "../live";

export const getActiveSaleByCoupon = async (coupon: CouponCode) => {
  const ACTIVE_SALE_QUERY = defineQuery(`
        *[_type == "sales" && isActive == true && couponCode == $coupon] | order(validFrom desc)[0]`);
        try{
            const activeSale = await sanityFetch({
                query: ACTIVE_SALE_QUERY,
                params: { coupon },
            })
            return activeSale ? activeSale.data : null;
        }catch(e){
            console.error(e)
            return null;
        }
};
