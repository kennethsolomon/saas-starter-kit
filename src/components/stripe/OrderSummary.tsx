// components/OrderSummary.js
import Stripe from "stripe";
interface Props {
  stripeSession: Stripe.Checkout.Session;
}
const OrderSummary: React.FC<Props> = ({ stripeSession }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Order ID: {stripeSession?.mode}</p>
    </div>
  );
};
export default OrderSummary;
