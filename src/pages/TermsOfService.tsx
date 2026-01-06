
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Terms of Service</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <p className="text-muted-foreground mb-4">
              Last Updated: May 1, 2023
            </p>
            <p className="text-muted-foreground">
              Please read these Terms of Service ("Terms") carefully before using the Harvest website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Account Registration</h2>
            <p className="text-muted-foreground">
              To use certain features of our services, you may need to create an account. You agree to provide accurate, current, and complete information and to update this information to maintain its accuracy. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">2. Orders and Payments</h2>
            <p className="text-muted-foreground mb-3">
              By placing an order, you agree to pay the specified prices and applicable taxes. Payment must be made using one of our accepted payment methods. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Limit or cancel quantities purchased per person, household, or order</li>
              <li>Reject or cancel orders at our discretion</li>
              <li>Discontinue products or services without notice</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">3. Delivery and Pickup</h2>
            <p className="text-muted-foreground">
              You agree to provide accurate delivery information and ensure that someone is available to receive deliveries during the specified time window. For pickup orders, you must collect your items during the designated pickup hours. We are not responsible for quality issues arising from orders that are not collected on time.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">4. Product Information</h2>
            <p className="text-muted-foreground">
              We strive to display product information accurately, but we do not guarantee that all information is complete or error-free. Product images are for illustrative purposes only and may not exactly reflect the actual product due to the natural variation in organic produce. We reserve the right to substitute items of equal or greater value if products are unavailable.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">5. Returns and Refunds</h2>
            <p className="text-muted-foreground">
              If you are not satisfied with your purchase, please contact our customer service team within 24 hours of delivery. We may offer a refund, replacement, or store credit at our discretion. For perishable items, photographic evidence of quality issues may be required.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content on our website, including text, graphics, logos, images, and software, is the property of Harvest and protected by intellectual property laws. You may not use, reproduce, distribute, or create derivative works from this content without our explicit permission.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Harvest shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products. Our total liability shall not exceed the amount paid by you for the applicable purchase.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">8. Modifications to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. Continued use of our services after any changes constitutes your acceptance of the revised Terms. We will provide notice of significant changes by updating the "Last Updated" date.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any principles of conflicts of law.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">10. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at legal@harvest.com or write to us at: Legal Department, Harvest, 123 Harvest Way, Farmington, CA 95432.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
