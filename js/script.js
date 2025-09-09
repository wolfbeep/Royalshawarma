// Royal Shawarma Website JavaScript

// Menu data
const menuItems = [
    {
        id: 1,
        name: "Classic Chicken Shawarma",
        description: "Tender marinated chicken wrapped in fresh pita with garlic sauce, pickles, and vegetables",
        price: "$12.99",
        image: "images/chicken-shawarma.jpg"
    },
    {
        id: 2,
        name: "Lamb Shawarma Platter",
        description: "Succulent lamb shawarma served with rice, salad, hummus, and tahini sauce",
        price: "$16.99",
        image: "images/lamb-shawarma.jpg"
    },
    {
        id: 3,
        name: "Mixed Grill Plate",
        description: "Combination of chicken and lamb kebabs with grilled vegetables and basmati rice",
        price: "$18.99",
        image: "images/mixed-grill.jpg"
    },
    {
        id: 4,
        name: "Falafel Wrap",
        description: "Crispy falafel with fresh vegetables, hummus, and tahini in a warm pita bread",
        price: "$10.99",
        image: "images/falafel-wrap.jpg"
    },
    {
        id: 5,
        name: "Beef Kebab",
        description: "Grilled beef kebab skewers marinated in Middle Eastern spices, served with rice",
        price: "$15.99",
        image: "images/beef-kebab.jpg"
    },
    {
        id: 6,
        name: "Hummus with Pita",
        description: "Creamy hummus topped with olive oil and paprika, served with warm pita bread",
        price: "$8.99",
        image: "images/hummus-pita.jpg"
    },
    {
        id: 7,
        name: "Tabbouleh Salad",
        description: "Fresh parsley salad with tomatoes, onions, mint, lemon juice, and olive oil",
        price: "$9.99",
        image: "images/tabbouleh.jpg"
    },
    {
        id: 8,
        name: "Manakish Zaatar",
        description: "Traditional Lebanese flatbread topped with zaatar spice blend and olive oil",
        price: "$7.99",
        image: "images/manakish.jpg"
    },
    {
        id: 9,
        name: "Baklava",
        description: "Sweet pastry layers filled with nuts and honey syrup",
        price: "$5.99",
        image: "images/baklava.jpg"
    },
    {
        id: 10,
        name: "Arabic Coffee",
        description: "Traditional Middle Eastern coffee served with dates",
        price: "$3.99",
        image: "images/arabic-coffee.jpg"
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
            menuCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-card-image" onerror="this.src='images/placeholder-food.jpg'">
                <div class="menu-card-content">
                    <h3 class="menu-card-title">${item.name}</h3>
                    <p class="menu-card-description">${item.description}</p>
                    <div class="menu-card-price">${item.price}</div>
                </div>
            `;
            
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