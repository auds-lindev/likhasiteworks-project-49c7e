// Menu Data
const menuData = {
    appetizers: [
        {
            name: "Burrata & Heirloom Tomatoes",
            description: "Fresh burrata cheese, vine-ripened heirloom tomatoes, basil pesto, balsamic reduction, and toasted pine nuts",
            price: "$16",
            image: "http://static.photos/food/640x360/101",
            tags: ["Vegetarian", "Gluten-Free"]
        },
        {
            name: "Seared Scallops",
            description: "Pan-seared jumbo scallops, cauliflower purée, crispy pancetta, and lemon butter sauce",
            price: "$22",
            image: "http://static.photos/food/640x360/102",
            tags: ["Chef's Pick"]
        },
        {
            name: "Truffle Arancini",
            description: "Crispy risotto balls infused with black truffle, served with garlic aioli and marinara",
            price: "$14",
            image: "http://static.photos/food/640x360/103",
            tags: ["Vegetarian"]
        },
        {
            name: "Tuna Tartare",
            description: "Fresh yellowfin tuna, avocado, sesame seeds, wonton crisps, and spicy yuzu dressing",
            price: "$24",
            image: "http://static.photos/food/640x360/104",
            tags: ["Raw", "Gluten-Free"]
        }
    ],
    mains: [
        {
            name: "Herb-Crusted Lamb Rack",
            description: "New Zealand lamb, Dijon mustard herb crust, rosemary jus, roasted root vegetables, and potato gratin",
            price: "$42",
            image: "http://static.photos/food/640x360/201",
            tags: ["Chef's Pick"]
        },
        {
            name: "Pan-Roasted Duck Breast",
            description: "Cherry reduction sauce, wild rice pilaf, sautéed spinach, and orange segments",
            price: "$38",
            image: "http://static.photos/food/640x360/202",
            tags: []
        },
        {
            name: "Miso Glazed Black Cod",
            description: "Sake-miso marinated Alaskan black cod, bok choy, shiitake mushrooms, and ginger broth",
            price: "$44",
            image: "http://static.photos/food/640x360/203",
            tags: ["Gluten-Free"]
        },
        {
            name: "Wild Mushroom Risotto",
            description: "Arborio rice, porcini and chanterelle mushrooms, truffle oil, parmesan crisp, and microgreens",
            price: "$32",
            image: "http://static.photos/food/640x360/204",
            tags: ["Vegetarian"]
        }
    ],
    desserts: [
        {
            name: "Dark Chocolate Fondant",
            description: "Molten center chocolate cake, vanilla bean ice cream, and raspberry coulis",
            price: "$14",
            image: "http://static.photos/food/640x360/301",
            tags: ["Vegetarian"]
        },
        {
            name: "Crème Brûlée",
            description: "Classic vanilla bean custard with caramelized sugar crust and fresh berries",
            price: "$12",
            image: "http://static.photos/food/640x360/302",
            tags: ["Vegetarian", "Gluten-Free"]
        },
        {
            name: "Tiramisu",
            description: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dust, and coffee caramel",
            price: "$13",
            image: "http://static.photos/food/640x360/303",
            tags: ["Vegetarian"]
        },
        {
            name: "Lemon Basil Tart",
            description: "Tangy lemon curd, buttery pastry, fresh basil, and torched meringue",
            price: "$11",
            image: "http://static.photos/food/640x360/304",
            tags: ["Vegetarian"]
        }
    ]
};

// Navigation scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Menu switching functionality
function switchMenu(category) {
    // Update tabs
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.remove('text-gray-800');
        tab.classList.add('text-gray-500');
    });
    
    const activeTab = document.getElementById(`tab-${category}`);
    activeTab.classList.add('active');
    activeTab.classList.remove('text-gray-500');
    activeTab.classList.add('text-gray-800');
    
    // Update content with animation
    const contentDiv = document.getElementById('menu-content');
    contentDiv.style.opacity = '0';
    
    setTimeout(() => {
        renderMenuItems(category);
        contentDiv.style.opacity = '1';
    }, 200);
}

function renderMenuItems(category) {
    const container = document.getElementById('menu-content');
    const items = menuData[category];
    
    container.innerHTML = items.map(item => `
        <div class="dish-card flex gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors menu-item">
            <div class="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <img src="${item.image}" alt="${item.name}" class="dish-image w-full h-full object-cover">
            </div>
            <div class="flex-1">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-serif text-xl font-bold text-gray-900">${item.name}</h3>
                    <span class="text-amber-700 font-bold text-lg">${item.price}</span>
                </div>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed">${item.description}</p>
                <div class="flex gap-2">
                    ${item.tags.map(tag => `
                        <span class="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">${tag}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Scroll to reservation
function scrollToReserve() {
    document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
}

// Modal functions
function openReservationModal() {
    const modal = document.getElementById('reservation-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeReservationModal() {
    const modal = document.getElementById('reservation-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function handleReservation(e) {
    e.preventDefault();
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
    closeReservationModal();
    e.target.reset();
}

// Newsletter handler
function handleNewsletter(e) {
    e.preventDefault();
    const successMsg = document.getElementById('newsletter-success');
    successMsg.classList.remove('hidden');
    e.target.reset();
    
    setTimeout(() => {
        successMsg.classList.add('hidden');
    }, 3000);
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Testimonials Carousel
let currentTestimonial = 0;
const totalTestimonials = 4;
let testimonialInterval;

function updateTestimonialPosition() {
    const track = document.getElementById('testimonials-track');
    track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
        if (index === currentTestimonial) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-amber-600');
        } else {
            dot.classList.remove('bg-amber-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

function moveTestimonial(direction) {
    currentTestimonial += direction;
    if (currentTestimonial < 0) currentTestimonial = totalTestimonials - 1;
    if (currentTestimonial >= totalTestimonials) currentTestimonial = 0;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonialPosition();
    resetTestimonialInterval();
}

function startTestimonialInterval() {
    testimonialInterval = setInterval(() => {
        moveTestimonial(1);
    }, 6000);
}

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    startTestimonialInterval();
}

// Initialize menu on load
document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems('appetizers');
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
    startTestimonialInterval();
    
    // Initialize Lucide icons for new content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});