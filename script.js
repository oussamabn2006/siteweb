// Sample product data (60 products across 3 pages) with Unsplash image URLs and comments
const products = {
    1: { name: "Firewall Pro", price: 99.99, desc: "Advanced firewall protection.", category: "firewall", image: "https://images.unsplash.com/photo-1633113212523-6a49f4d3c3d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    2: { name: "VPN Elite", price: 49.99, desc: "Secure browsing with top-tier VPN.", category: "vpn", image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    3: { name: "Antivirus Plus", price: 79.99, desc: "Comprehensive antivirus protection.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    4: { name: "Secure Encryptor", price: 59.99, desc: "Encrypt your data with ease.", category: "encryption", image: "https://images.unsplash.com/photo-1633113092853-7e1e6e32e7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    5: { name: "Firewall Ultra", price: 129.99, desc: "Next-gen firewall for enterprises.", category: "firewall", image: "https://images.unsplash.com/photo-1633113211888-8f0e4d2e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    6: { name: "VPN Pro", price: 39.99, desc: "Affordable VPN for all devices.", category: "vpn", image: "https://images.unsplash.com/photo-1633114127401-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    7: { name: "Antivirus Elite", price: 89.99, desc: "Elite antivirus with real-time scanning.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114127451-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    8: { name: "Data Shield", price: 69.99, desc: "Protect your data with advanced encryption.", category: "encryption", image: "https://images.unsplash.com/photo-1633114127501-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    9: { name: "Firewall Max", price: 149.99, desc: "Maximum firewall protection.", category: "firewall", image: "https://images.unsplash.com/photo-1633114127551-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    10: { name: "VPN Secure", price: 29.99, desc: "Secure VPN for everyday use.", category: "vpn", image: "https://images.unsplash.com/photo-1633114127601-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    11: { name: "Firewall Elite", price: 159.99, desc: "Elite firewall for ultimate security.", category: "firewall", image: "https://images.unsplash.com/photo-1633114127651-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    12: { name: "VPN Ultra", price: 59.99, desc: "Ultra-fast VPN for streaming.", category: "vpn", image: "https://images.unsplash.com/photo-1633114127701-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    13: { name: "Antivirus Pro", price: 99.99, desc: "Pro-level antivirus protection.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114127751-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    14: { name: "Crypto Guard", price: 79.99, desc: "Guard your data with military-grade encryption.", category: "encryption", image: "https://images.unsplash.com/photo-1633114127801-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    15: { name: "Firewall Secure", price: 109.99, desc: "Secure firewall for small businesses.", category: "firewall", image: "https://images.unsplash.com/photo-1633114127851-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    16: { name: "VPN Max", price: 69.99, desc: "Maximize your privacy with this VPN.", category: "vpn", image: "https://images.unsplash.com/photo-1633114127901-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    17: { name: "Antivirus Ultra", price: 119.99, desc: "Ultra antivirus with cloud backup.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114127951-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    18: { name: "Secure Vault", price: 89.99, desc: "Store your data securely.", category: "encryption", image: "https://images.unsplash.com/photo-1633114128001-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    19: { name: "Firewall Pro Plus", price: 179.99, desc: "Pro-level firewall with AI detection.", category: "firewall", image: "https://images.unsplash.com/photo-1633114128051-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    20: { name: "VPN Elite Plus", price: 79.99, desc: "Elite VPN with unlimited bandwidth.", category: "vpn", image: "https://images.unsplash.com/photo-1633114128101-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    21: { name: "Firewall Guardian", price: 139.99, desc: "Guardian-level firewall protection.", category: "firewall", image: "https://images.unsplash.com/photo-1633114128151-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    22: { name: "VPN Stealth", price: 44.99, desc: "Stealth VPN for anonymous browsing.", category: "vpn", image: "https://images.unsplash.com/photo-1633114128201-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    23: { name: "Antivirus Defender", price: 84.99, desc: "Defender antivirus for all devices.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114128251-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    24: { name: "Crypto Lock", price: 64.99, desc: "Lock your data with advanced encryption.", category: "encryption", image: "https://images.unsplash.com/photo-1633114128301-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    25: { name: "Firewall Shield", price: 119.99, desc: "Shield your network with this firewall.", category: "firewall", image: "https://images.unsplash.com/photo-1633114128351-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    26: { name: "VPN Guardian", price: 54.99, desc: "Guardian VPN for secure connections.", category: "vpn", image: "https://images.unsplash.com/photo-1633114128401-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    27: { name: "Antivirus Secure", price: 94.99, desc: "Secure antivirus with real-time protection.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114128451-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    28: { name: "Data Vault", price: 74.99, desc: "Vault your data with top encryption.", category: "encryption", image: "https://images.unsplash.com/photo-1633114128501-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    29: { name: "Firewall Defender", price: 169.99, desc: "Defender firewall for enterprise security.", category: "firewall", image: "https://images.unsplash.com/photo-1633114128551-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    30: { name: "VPN Elite Pro", price: 64.99, desc: "Pro-level VPN with elite features.", category: "vpn", image: "https://images.unsplash.com/photo-1633114128601-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    31: { name: "Firewall Sentinel", price: 189.99, desc: "Sentinel firewall for maximum security.", category: "firewall", image: "https://images.unsplash.com/photo-1633114128651-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    32: { name: "VPN Shield", price: 34.99, desc: "Shield VPN for everyday privacy.", category: "vpn", image: "https://images.unsplash.com/photo-1633114128701-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    33: { name: "Antivirus Guardian", price: 104.99, desc: "Guardian antivirus with cloud support.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114128751-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    34: { name: "Crypto Shield", price: 84.99, desc: "Shield your data with military-grade encryption.", category: "encryption", image: "https://images.unsplash.com/photo-1633114128801-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    35: { name: "Firewall Pro Elite", price: 199.99, desc: "Elite firewall with AI-driven protection.", category: "firewall", image: "https://images.unsplash.com/photo-1633114128851-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    36: { name: "VPN Ultra Pro", price: 74.99, desc: "Ultra-pro VPN for streaming and gaming.", category: "vpn", image: "https://images.unsplash.com/photo-1633114128901-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    37: { name: "Antivirus Elite Pro", price: 124.99, desc: "Elite pro antivirus with advanced features.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114128951-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    38: { name: "Data Guardian", price: 94.99, desc: "Guardian for your sensitive data.", category: "encryption", image: "https://images.unsplash.com/photo-1633114129001-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    39: { name: "Firewall Ultra Pro", price: 209.99, desc: "Ultra-pro firewall for large enterprises.", category: "firewall", image: "https://images.unsplash.com/photo-1633114129051-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    40: { name: "VPN Secure Pro", price: 84.99, desc: "Secure pro VPN with unlimited bandwidth.", category: "vpn", image: "https://images.unsplash.com/photo-1633114129101-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    41: { name: "Firewall Sentinel Pro", price: 219.99, desc: "Sentinel pro firewall for ultimate security.", category: "firewall", image: "https://images.unsplash.com/photo-1633114129151-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    42: { name: "VPN Stealth Pro", price: 94.99, desc: "Stealth pro VPN for anonymous browsing.", category: "vpn", image: "https://images.unsplash.com/photo-1633114129201-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    43: { name: "Antivirus Defender Pro", price: 134.99, desc: "Defender pro antivirus for all devices.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114129251-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    44: { name: "Crypto Lock Pro", price: 104.99, desc: "Pro-level encryption for your data.", category: "encryption", image: "https://images.unsplash.com/photo-1633114129301-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    45: { name: "Firewall Shield Pro", price: 229.99, desc: "Pro-level firewall shield for networks.", category: "firewall", image: "https://images.unsplash.com/photo-1633114129351-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    46: { name: "VPN Guardian Pro", price: 64.99, desc: "Pro-level VPN for secure connections.", category: "vpn", image: "https://images.unsplash.com/photo-1633114129401-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    47: { name: "Antivirus Secure Pro", price: 144.99, desc: "Pro-level antivirus with real-time protection.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114129451-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    48: { name: "Data Vault Pro", price: 114.99, desc: "Pro-level vault for your data.", category: "encryption", image: "https://images.unsplash.com/photo-1633114129501-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    49: { name: "Firewall Defender Pro", price: 239.99, desc: "Pro-level defender firewall for enterprises.", category: "firewall", image: "https://images.unsplash.com/photo-1633114129551-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    50: { name: "VPN Elite Ultra", price: 74.99, desc: "Ultra-level VPN with elite features.", category: "vpn", image: "https://images.unsplash.com/photo-1633114129601-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    51: { name: "Firewall Guardian Ultra", price: 249.99, desc: "Ultra-level firewall for maximum security.", category: "firewall", image: "https://images.unsplash.com/photo-1633114129651-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    52: { name: "VPN Stealth Ultra", price: 84.99, desc: "Ultra-level VPN for anonymous browsing.", category: "vpn", image: "https://images.unsplash.com/photo-1633114129701-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    53: { name: "Antivirus Defender Ultra", price: 154.99, desc: "Ultra-level antivirus for all devices.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114129751-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    54: { name: "Crypto Lock Ultra", price: 124.99, desc: "Ultra-level encryption for your data.", category: "encryption", image: "https://images.unsplash.com/photo-1633114129801-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    55: { name: "Firewall Shield Ultra", price: 259.99, desc: "Ultra-level firewall shield for networks.", category: "firewall", image: "https://images.unsplash.com/photo-1633114129851-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    56: { name: "VPN Guardian Ultra", price: 94.99, desc: "Ultra-level VPN for secure connections.", category: "vpn", image: "https://images.unsplash.com/photo-1633114129901-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- VPN pic -->
    57: { name: "Antivirus Secure Ultra", price: 164.99, desc: "Ultra-level antivirus with real-time protection.", category: "antivirus", image: "https://images.unsplash.com/photo-1633114129951-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Antivirus pic -->
    58: { name: "Data Vault Ultra", price: 134.99, desc: "Ultra-level vault for your data.", category: "encryption", image: "https://images.unsplash.com/photo-1633114130001-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Encryption pic -->
    59: { name: "Firewall Defender Ultra", price: 269.99, desc: "Ultra-level defender firewall for enterprises.", category: "firewall", image: "https://images.unsplash.com/photo-1633114130051-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }, // <!-- Firewall pic -->
    60: { name: "VPN Elite Max", price: 104.99, desc: "Max-level VPN with elite features.", category: "vpn", image: "https://images.unsplash.com/photo-1633114130101-4f1e4b6e4c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" } // <!-- VPN pic -->
};

// Initialize cart and reviews from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let reviews = JSON.parse(localStorage.getItem('reviews')) || {};
let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.parentElement.dataset.id || button.dataset.id;
        const product = products[productId];
        cart.push({ ...product, id: Date.now() }); // Add unique ID for cart items
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    });
});

// Quick View functionality
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.parentElement.dataset.id;
        const product = products[productId];
        const modal = document.getElementById('quick-view-modal');
        document.getElementById('modal-image').src = product.image;
        document.getElementById('modal-name').textContent = product.name;
        document.getElementById('modal-price').textContent = `$${product.price}`;
        document.getElementById('modal-desc').textContent = product.desc;
        document.getElementById('modal-add-to-cart').dataset.id = productId;
        modal.classList.add('active');

        // Add to recently viewed
        if (!recentlyViewed.includes(productId)) {
            recentlyViewed.push(productId);
            if (recentlyViewed.length > 5) recentlyViewed.shift(); // Keep only last 5
            localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
            updateRecentlyViewed();
        }
    });
});

// Close Quick View modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('quick-view-modal').classList.remove('active');
});

// Featured Product Carousel auto-scroll
if (document.querySelector('.product-carousel')) {
    const carousel = document.querySelector('.product-carousel');
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 2;
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
        }
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 50);
}

// Update Recently Viewed section
function updateRecentlyViewed() {
    const recentlyViewedList = document.getElementById('recently-viewed-list');
    if (recentlyViewedList) {
        recentlyViewedList.innerHTML = '';
        recentlyViewed.forEach(productId => {
            const product = products[productId];
            const div = document.createElement('div');
            div.classList.add('product-card');
            div.dataset.id = productId;
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart neon-btn">Add to Cart</button>
                <button class="quick-view neon-btn">Quick View</button>
            `;
            recentlyViewedList.appendChild(div);
        });

        // Re-attach event listeners for new elements
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.parentElement.dataset.id;
                const product = products[productId];
                cart.push({ ...product, id: Date.now() });
                localStorage.setItem('cart', JSON.stringify(cart));
                alert(`${product.name} added to cart!`);
            });
        });

        document.querySelectorAll('.quick-view').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.parentElement.dataset.id;
                const product = products[productId];
                const modal = document.getElementById('quick-view-modal');
                document.getElementById('modal-image').src = product.image;
                document.getElementById('modal-name').textContent = product.name;
                document.getElementById('modal-price').textContent = `$${product.price}`;
                document.getElementById('modal-desc').textContent = product.desc;
                document.getElementById('modal-add-to-cart').dataset.id = productId;
                modal.classList.add('active');
            });
        });
    }
}

// Load Recently Viewed on page load
if (window.location.pathname.includes('index.html')) {
    updateRecentlyViewed();
}

// Load product details
if (window.location.pathname.includes('product.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products[productId];
    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = `$${product.price}`;
        document.getElementById('product-desc').textContent = product.desc;
        document.getElementById('product-image').src = product.image;
        document.querySelector('.add-to-cart').dataset.id = productId;

        // Load reviews
        const reviewList = document.getElementById('review-list');
        if (reviews[productId]) {
            reviews[productId].forEach(review => {
                const div = document.createElement('div');
                div.classList.add('review');
                div.textContent = review;
                reviewList.appendChild(div);
            });
        }

        // Submit review
        document.getElementById('submit-review').addEventListener('click', () => {
            const reviewText = document.getElementById('review-text').value;
            if (reviewText) {
                if (!reviews[productId]) reviews[productId] = [];
                reviews[productId].push(reviewText);
                localStorage.setItem('reviews', JSON.stringify(reviews));
                const div = document.createElement('div');
                div.classList.add('review');
                div.textContent = reviewText;
                reviewList.appendChild(div);
                document.getElementById('review-text').value = '';
            }
        });

        // Add to recently viewed
        if (!recentlyViewed.includes(productId)) {
            recentlyViewed.push(productId);
            if (recentlyViewed.length > 5) recentlyViewed.shift();
            localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
        }
    }
}

// Load cart with dynamic updates
if (window.location.pathname.includes('cart.html')) {
    const cartItems = document.querySelector('.cart-items');
    const updateCart = () => {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <span>${item.name} - $${item.price}</span>
                <button data-index="${index}">Remove</button>
            `;
            cartItems.appendChild(div);
            total += item.price;
        });
        document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;

        // Add remove functionality
        document.querySelectorAll('.cart-item button').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.dataset.index;
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            });
        });
    };
    updateCart();
}

// Product filters and search
if (window.location.pathname.includes('products.html') || window.location.pathname.includes('products-page2.html') || window.location.pathname.includes('products-page3.html')) {
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const productList = document.querySelector('.product-list');
    const productCards = document.querySelectorAll('.product-card');
    const productCount = document.getElementById('product-count');

    const updateProducts = () => {
        const searchTerm = searchInput.value.toLow
erCase();
        const filterValue = filterSelect.value;
        let visibleCount = 0;

        productCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const category = card.dataset.category;

            const matchesSearch = name.includes(searchTerm);
            const matchesFilter = filterValue === 'all' || category === filterValue;

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        productCount.textContent = visibleCount;
    };

    searchInput.addEventListener('input', updateProducts);
    filterSelect.addEventListener('change', updateProducts);
    updateProducts(); // Initial call to set count
}

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Show/hide back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});