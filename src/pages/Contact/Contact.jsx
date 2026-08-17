import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted.");
  };

  return (
    <main className="contact-page">
      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h1>Contact InternBridge</h1>
        <p>Have a question? We'd love to hear from you.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Whether you need help with internships or career preparation,
            feel free to contact our team.
          </p>

          <div>
            <strong>Email</strong>
            <p>support@internbridge.com</p>
          </div>

          <div>
            <strong> Location</strong>
            <p>India</p>
          </div>

          <div>
            <strong>Support</strong>
            <p>Monday - Friday</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Subject</label>
          <input placeholder="Enter subject" required />

          <label>Message</label>
          <textarea rows="5" placeholder="Write your message..." required />

          <button>Send Message</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;