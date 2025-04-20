function createHome() {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');

    // Hero Section
    const heroSection = document.createElement('div');
    heroSection.classList.add('hero-section');
    heroSection.innerHTML = `
        <h1>Southern Comfort Restaurant</h1>
        <p class="hero-subtitle">Where Every Meal Feels Like Home</p>
        <div class="hero-cta">
            <button class="cta-button" onclick="window.location.href='#menu'">View Menu</button>
            <button class="cta-button secondary" onclick="window.location.href='#contact'">Make Reservation</button>
        </div>
    `;

    // Featured Items Section
    const featuredSection = document.createElement('div');
    featuredSection.classList.add('featured-section');
    featuredSection.innerHTML = `
        <h2>Featured Dishes</h2>
        <div class="featured-grid">
            <div class="featured-item">
                <div class="featured-image" style="background-image: url('https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800')"></div>
                <h3>Southern Fried Chicken</h3>
                <p>Our signature dish, perfectly seasoned and fried to golden perfection.</p>
            </div>
            <div class="featured-item">
                <div class="featured-image" style="background-image: url('https://images.unsplash.com/photo-1636986196800-501029e4758d?auto=format&fit=crop&w=800')"></div>
                <h3>Buttermilk Biscuits</h3>
                <p>Flaky, buttery biscuits made fresh daily.</p>
            </div>
            <div class="featured-item">
                <div class="featured-image" style="background-image: url('https://images.unsplash.com/photo-1686998424941-9006770e7f3e?auto=format&fit=crop&w=800')"></div>
                <h3>Creamy Mashed Potatoes</h3>
                <p>Smooth and rich, the perfect comfort food side dish.</p>
            </div>
        </div>
    `;

    // About Section
    const aboutSection = document.createElement('div');
    aboutSection.classList.add('about-section');
    aboutSection.innerHTML = `
        <div class="about-content">
            <h2>Our Story</h2>
            <p>Welcome to Southern Comfort, where traditional southern recipes meet modern culinary excellence. For over 20 years, we've been serving up authentic southern cuisine made with love and the finest ingredients.</p>
            <p>Our commitment to quality and hospitality has made us a beloved destination for families, friends, and food lovers alike. Every dish that leaves our kitchen carries the warmth and care of generations of southern cooking tradition.</p>
        </div>
        <div class="highlights">
            <div class="highlight-item">
                <span class="highlight-number">20+</span>
                <span class="highlight-text">Years of Service</span>
            </div>
            <div class="highlight-item">
                <span class="highlight-number">50+</span>
                <span class="highlight-text">Signature Dishes</span>
            </div>
            <div class="highlight-item">
                <span class="highlight-number">1000+</span>
                <span class="highlight-text">Happy Customers</span>
            </div>
        </div>
    `;

    // Special Offers Section
    const specialsSection = document.createElement('div');
    specialsSection.classList.add('specials-section');
    specialsSection.innerHTML = `
        <h2>Special Offers</h2>
        <div class="specials-grid">
            <div class="special-card">
                <h3>Family Sunday</h3>
                <p>20% off on family-size portions every Sunday</p>
                <span class="special-time">All Day Sunday</span>
            </div>
            <div class="special-card">
                <h3>Happy Hour</h3>
                <p>Half-price appetizers and drinks</p>
                <span class="special-time">Mon-Fri, 4PM-6PM</span>
            </div>
            <div class="special-card">
                <h3>Weekly Special</h3>
                <p>Chef's special creation at special price</p>
                <span class="special-time">Changes Weekly</span>
            </div>
        </div>
    `;

    // Append all sections
    homeContent.appendChild(heroSection);
    homeContent.appendChild(featuredSection);
    homeContent.appendChild(aboutSection);
    homeContent.appendChild(specialsSection);

    return homeContent;
}

function loadHome() {
    const main = document.getElementById('content');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;