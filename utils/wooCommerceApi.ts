import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Order } from "./wooCommerceTypes";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: "http://localhost/AKAAutomotive",
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

// Order sata for development purposes
const data = {
  payment_method: "cash",
  payment_method_title: "Cash",
  set_paid: false,
  line_items: [
    {
      product_id: 15,
      quantity: 2,
    },
  ],
};

// create new WooCommerce order by passing in required data object //
export async function createWooCommerceOrder(data: Order) {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error: any) {
    throw new Error(error);
  }
}
