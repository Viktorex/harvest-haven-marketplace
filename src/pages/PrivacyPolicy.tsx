
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <p className="text-muted-foreground mb-4">
              Last Updated: May 1, 2023
            </p>
            <p className="text-muted-foreground">
              At Harvest, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-muted-foreground mb-3">
              We collect personal information that you provide directly to us, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact information (name, email address, phone number, delivery address)</li>
              <li>Account information (username, password)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Order history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">
              We use your personal information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Send transactional emails (order confirmations, delivery updates)</li>
              <li>Send marketing communications, if you've opted in</li>
              <li>Improve our products and services</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to track activity on our website and collect certain information. Cookies are small data files that are stored on your device when you visit a website. You can control cookies through your browser settings.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-3">
              We may share your personal information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Service providers who perform services on our behalf</li>
              <li>Payment processors to complete transactions</li>
              <li>Delivery partners to fulfill your orders</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We do not sell your personal information to third parties.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Your Rights and Choices</h2>
            <p className="text-muted-foreground mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Accessing and reviewing your personal information</li>
              <li>Correcting inaccuracies in your personal information</li>
              <li>Deleting your personal information</li>
              <li>Opting out of marketing communications</li>
              <li>Objecting to certain uses of your personal information</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about our Privacy Policy or data practices, please contact us at privacy@harvest.com or write to us at: Privacy Team, Harvest, 123 Harvest Way, Farmington, CA 95432.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
