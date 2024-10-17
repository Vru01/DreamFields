import React from 'react';
import './contact.css'; // Import your CSS for styling

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us for any suggestions or inquiries.</p>
        </div>

        <div className="row contact-content">
          {/* Image Section */}
          <div className="col-lg-6 contact-image">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-us-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-phone-customer-service-pack-tech-support-icons-5807272.png?f=webp"
              alt="Contact Us"
              className="contact-img"
            />
          </div>

          {/* Form Section */}
          <div className="col-lg-6 contact-form-container">
            <form className="contact-form w-full">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Team Contact Details */}
        <div className="row contact-info mt-5">
          <div className="col-md-6">
            <div className="info-box">
              <i className="bi bi-phone phone-icon"></i>
              <h4>Phone</h4>
              <p>+91 9112458789</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-box">
              <i className="bi bi-envelope email-icon"></i>
              <h4>Email</h4>
              <p>DreamFields@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
