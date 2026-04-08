const properties = [
    {
        id: 1,
        type: 'rent',
        title: "Modern Apartment in City Center",
        price: "$1,200/mo",
        location: "New York, NY",
        beds: 2,
        baths: 2,
        sqft: 850,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        type: 'rent',
        title: "Cozy Family Home",
        price: "$2,500/mo",
        location: "Los Angeles, CA",
        beds: 3,
        baths: 2.5,
        sqft: 1800,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        type: 'sell',
        title: "Luxury Villa with Pool",
        price: "$1,500,000",
        location: "Miami, FL",
        beds: 5,
        baths: 4,
        sqft: 4000,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        type: 'sell',
        title: "Modern Townhouse",
        price: "$450,000",
        location: "Austin, TX",
        beds: 3,
        baths: 3,
        sqft: 2200,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        type: 'rent',
        title: "Stylish Studio",
        price: "$950/mo",
        location: "Chicago, IL",
        beds: 1,
        baths: 1,
        sqft: 500,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        type: 'sell',
        title: "Beachfront Condo",
        price: "$750,000",
        location: "San Diego, CA",
        beds: 2,
        baths: 2,
        sqft: 1200,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

function createPropertyCard(property) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100">
                <div class="position-relative">
                    <img src="${property.image}" class="card-img-top" alt="${property.title}">
                    <span class="badge-custom">${property.type === 'rent' ? 'For Rent' : 'For Sale'}</span>
                </div>
                <div class="card-body">
                    <h5 class="fw-bold fs-5 text-primary">$${property.price}</h5>
                    <h6 class="card-title fw-semibold mb-2">${property.title}</h6>
                    <p class="text-muted small mb-3"><i class="fa-solid fa-location-dot me-1"></i> ${property.location}</p>
                    
                    <div class="d-flex justify-content-between text-secondary small border-top pt-3">
                        <span><i class="fa-solid fa-bed me-1"></i> ${property.beds} Bed</span>
                        <span><i class="fa-solid fa-bath me-1"></i> ${property.baths} Bath</span>
                        <span><i class="fa-solid fa-ruler-combined me-1"></i> ${property.sqft} sqft</span>
                    </div>
                </div>
                <div class="card-footer bg-white border-0 pb-4 pt-0">
                    <button class="btn btn-outline-primary w-100 rounded-pill">View Details</button>
                </div>
            </div>
        </div>
    `;
}

function renderProperties() {
    const rentContainer = document.getElementById('rent-listings');
    const sellContainer = document.getElementById('sell-listings');

    rentContainer.innerHTML = properties
        .filter(p => p.type === 'rent')
        .map(createPropertyCard)
        .join('');

    sellContainer.innerHTML = properties
        .filter(p => p.type === 'sell')
        .map(createPropertyCard)
        .join('');
}

document.addEventListener('DOMContentLoaded', renderProperties);
