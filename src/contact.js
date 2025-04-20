function createContact() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = "Contact Us";
    contactTitle.classList.add('contact-title');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    
    // Restaurant Information
    const infoSection = document.createElement('div');
    infoSection.classList.add('info-section');
    
    const hours = document.createElement('div');
    hours.innerHTML = `
        <h2>Hours of Operation</h2>
        <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
        <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
        <p>Sunday: 12:00 PM - 8:00 PM</p>
    `;

    const address = document.createElement('div');
    address.innerHTML = `
        <h2>Location</h2>
        <p>123 Comfort Food Lane</p>
        <p>Foodville, FC 12345</p>
        <p>United States</p>
    `;

    const phone = document.createElement('div');
    phone.innerHTML = `
        <h2>Contact Details</h2>
        <p>Phone: (555) 123-4567</p>
        <p>Email: info@southerncomfort.com</p>
    `;

    // Contact Form
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactForm.innerHTML = `
        <h2>Send us a Message</h2>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
    `;

    // Add event listener to form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Append all sections
    infoSection.appendChild(hours);
    infoSection.appendChild(address);
    infoSection.appendChild(phone);
    
    contactInfo.appendChild(infoSection);
    contactInfo.appendChild(contactForm);

    contactContent.appendChild(contactTitle);
    contactContent.appendChild(contactInfo);

    return contactContent;
}

function loadContact() {
    const main = document.getElementById('content');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;
