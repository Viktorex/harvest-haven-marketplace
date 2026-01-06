
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Shipping Policy</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <p className="text-muted-foreground mb-4">
              Last Updated: May 1, 2023
            </p>
            <p className="text-muted-foreground">
              At Harvest, we're committed to delivering the freshest produce to your doorstep. Our delivery system is designed to ensure maximum freshness and minimal environmental impact.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Delivery Areas</h2>
            <p className="text-muted-foreground mb-3">
              We currently deliver to the following areas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>San Francisco and surrounding Bay Area communities</li>
              <li>Los Angeles metropolitan area</li>
              <li>San Diego County</li>
              <li>Sacramento and surrounding areas</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Enter your zip code at checkout to confirm that we deliver to your location. We're continuously expanding our delivery zones, so check back if your area is not currently served.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Delivery Schedule</h2>
            <p className="text-muted-foreground mb-3">
              We deliver based on the following schedule:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Monday - Wednesday:</strong> San Francisco and Bay Area</li>
              <li><strong>Tuesday - Thursday:</strong> Los Angeles area</li>
              <li><strong>Wednesday - Friday:</strong> San Diego County</li>
              <li><strong>Thursday - Saturday:</strong> Sacramento area</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              During checkout, you'll be able to select an available delivery date and time window based on your location.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Delivery Fees</h2>
            <p className="text-muted-foreground mb-3">
              Our delivery fees are calculated based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your delivery location</li>
              <li>Order size</li>
              <li>Selected delivery time window</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Free delivery is available for orders over $75. Standard delivery fees typically range from $5.99 to $9.99.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Delivery Process</h2>
            <p className="text-muted-foreground">
              On delivery day, you'll receive text message updates about your order status. Our drivers will deliver your order in reusable insulated bags to keep your items fresh. You can either be present to receive the delivery or designate a safe place for the driver to leave your order.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Packaging</h2>
            <p className="text-muted-foreground">
              We're committed to sustainable packaging. All of our delivery materials are either compostable, recyclable, or reusable. We encourage customers to return delivery containers and ice packs with their next order for reuse.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Rescheduling or Cancellations</h2>
            <p className="text-muted-foreground">
              To reschedule or cancel a delivery, you must notify us at least
              48 hours before your scheduled delivery time. Changes or cancellations made after this window may not be accommodated and may be subject to a restocking fee.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Missed Deliveries</h2>
            <p className="text-muted-foreground">
              If you're not available during your selected delivery window and haven't designated a safe place for your order, our driver will attempt to contact you. If we can't reach you, we'll return your order to our facility. You'll be charged a redelivery fee if you wish to reschedule.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Pickup Options</h2>
            <p className="text-muted-foreground">
              In addition to delivery, we offer pickup options at select farmers markets and our warehouse locations. During checkout, you can choose to pick up your order instead of selecting delivery.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our shipping policy or need assistance with a delivery, please contact our customer service team at delivery@harvest.com or call (555) 123-4567.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
