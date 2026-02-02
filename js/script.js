// Royal Shawarma Website JavaScript

// Menu data
const menuItems = [
    {
        id: 1,
        name: "Chicken Shawarma with Greek Salad",
        description: "A fresh and flavorful fusion our tender, spiced chicken shawarma is paired with a vibrant Greek salad made with crisp lettuce, juicy tomatoes, cucumbers, onions, and creamy feta. Finished with our signature garlic and hot sauces, this dish offers the perfect balance of savory and refreshing in every bite",
        price: "$14.99",
        image: "images/chicken-shawarma-greek.jpg"
    },
    {
        id: 2,
        name: "Chicken Shawarma with Rice",
        description: "This classic shawarma dish is a local favorite, known for keeping customers coming back for more. Tender, perfectly seasoned chicken is served over a bed of fragrant rice, then topped with premium garlic sauce and a kick of hot sauce for the perfect finish.",
        price: "$13.99",
        image: "images/chicken-shawarma-rice.jpg"
    },
    {
        id: 3,
        name: "Chicken Shawarma with French Fries",
        description: "A mouthwatering combo that never disappoints our perfectly seasoned chicken shawarma is served with a generous side of crispy, golden French fries. Juicy, tender chicken layered with bold spices meets fries fried to perfection, all topped with our signature garlic and hot sauces. A local favorite that delivers flavor in every bite",
        price: "$12.99",
        image: "images/chicken-shawarma-fries.jpg"
    },
    {
        id: 4,
        name: "Falafel Plate with Greek Salad and Rice",
        description: "A wholesome and satisfying vegetarian favorite our falafel plate features crispy, golden chickpea patties served with fluffy rice and a refreshing Greek salad. Paired with creamy garlic sauce and optional hot sauce, this dish delivers bold flavor and fresh ingredients in every bite.",
        price: "$13.99",
        image: "images/falafel-plate-greek.jpg"
    },
    {
        id: 5,
        name: "Chicken Shawarma Pita",
        description: "Our Chicken Shawarma Pita is a handheld classic packed with flavor. Juicy, seasoned chicken is wrapped in warm pita bread and loaded with crisp lettuce, fresh tomatoes, onions, pickles, and tangy turnips. Finished with our signature garlic and hot sauces, it's the perfect grab-and-go meal that hits every craving",
        price: "$11.99",
        image: "images/chicken-shawarma-pita.jpg"
    }
];

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHeroImageCycling();
    generateMenuItems();
    initializeSmoothScrolling();
    initializeDeliveryButtons();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Hero image cycling
function initializeHeroImageCycling() {
    const heroImages = document.querySelectorAll('.hero-img');
    let currentImageIndex = 0;
    
    if (heroImages.length > 1) {
        setInterval(() => {
            // Remove active class from current image
            heroImages[currentImageIndex].classList.remove('active');
            
            // Move to next image
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            
            // Add active class to next image
            heroImages[currentImageIndex].classList.add('active');
        }, 10000); // 10 seconds
    }
}

// Generate menu items
function generateMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    
    if (menuGrid) {
        menuGrid.innerHTML = '';
        
        menuItems.forEach(item => {
            const menuCard = document.createElement('div');
            menuCard.className = 'menu-card';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;
            img.className = 'menu-card-image';
            img.onerror = function() { this.src = 'images/placeholder-food.jpg'; };

            const content = document.createElement('div');
            content.className = 'menu-card-content';

            const title = document.createElement('h3');
            title.className = 'menu-card-title';
            title.textContent = item.name;

            const description = document.createElement('p');
            description.className = 'menu-card-description';
            description.textContent = item.description;

            const price = document.createElement('div');
            price.className = 'menu-card-price';
            price.textContent = item.price;

            content.appendChild(title);
            content.appendChild(description);
            content.appendChild(price);
            menuCard.appendChild(img);
            menuCard.appendChild(content);
            
            // Add hover animation
            menuCard.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            menuCard.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            menuGrid.appendChild(menuCard);
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Delivery buttons animation
function initializeDeliveryButtons() {
    const deliveryButtons = document.querySelectorAll('.delivery-btn');
    const arrows = document.querySelectorAll('.delivery-arrow');
    
    deliveryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Animate arrows
            arrows.forEach(arrow => {
                if (arrow.classList.contains('left-arrow')) {
                    arrow.style.transform = 'translateX(-10px)';
                } else {
                    arrow.style.transform = 'translateX(10px)';
                }
                arrow.style.color = '#fbbf24';
            });
        });
        
        button.addEventListener('mouseleave', function() {
            // Reset arrows
            arrows.forEach(arrow => {
                arrow.style.transform = 'translateX(0)';
                arrow.style.color = 'white';
            });
        });
    });
}

// Add scroll-based animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.menu-card, .location-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations after a short delay
setTimeout(initializeScrollAnimations, 1000);

// Add window resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Close mobile menu if window is resized to larger screen
    if (window.innerWidth > 768) {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (navToggle && navMenu) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});