const movies = [
    {
        id: 1,
        title: "The Walking Dead",
        genre: "Horror / Drama",
        rating: 9.0,
        category: "Featured",
        description: "Sheriff Deputy Rick Grimes leads a group of survivors in a world overrun by the walking dead. They must fight for their lives and their humanity in a post-apocalyptic landscape.",
        poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800",
        banner: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600",
        year: "2010",
        duration: "11 Seasons"
    },
    {
        id: 2,
        title: "Stranger Things",
        genre: "Sci-Fi / Thriller",
        rating: 8.7,
        category: "Popular on Netflix",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800",
        banner: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1600",
        year: "2016",
        duration: "4 Seasons"
    },
    {
        id: 3,
        title: "The Witcher",
        genre: "Action / Fantasy",
        rating: 8.1,
        category: "Trending Now",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800",
        banner: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600",
        year: "2019",
        duration: "3 Seasons"
    },
    {
        id: 4,
        title: "Breaking Bad",
        genre: "Crime / Drama",
        rating: 9.5,
        category: "Top Rated",
        description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800",
        banner: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600",
        year: "2008",
        duration: "5 Seasons"
    },
    {
        id: 5,
        title: "Inception",
        genre: "Sci-Fi / Action",
        rating: 8.8,
        category: "Movies",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQb22VpBQ6D5ceHx8FVW2y0jXI8_mLlxvfWbhF9iu-imwpyFnHD8O5uV5zBTj-ykKgbeHkEdVOk0DdbDxN_KyrxMmvWiT5T4uikz.jpg?r=df3",
        banner: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQb22VpBQ6D5ceHx8FVW2y0jXI8_mLlxvfWbhF9iu-imwpyFnHD8O5uV5zBTj-ykKgbeHkEdVOk0DdbDxN_KyrxMmvWiT5T4uikz.jpg?r=df3",
        year: "2010",
        duration: "2h 28m"
    },
    {
        id: 6,
        title: "The Crown",
        genre: "Drama / History",
        rating: 8.6,
        category: "Popular on Netflix",
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
        poster: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYSZm4PV_00bGPdQPIvuhydEHANcFn_-JXX04n4uHkI357GJePBtuKKWkJluk7dLU0ivWJmSyzBedgKpGQ8OZDeXdecLZhSYoXqr.jpg?r=ae3",
        banner: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYSZm4PV_00bGPdQPIvuhydEHANcFn_-JXX04n4uHkI357GJePBtuKKWkJluk7dLU0ivWJmSyzBedgKpGQ8OZDeXdecLZhSYoXqr.jpg?r=ae3",
        year: "2016",
        duration: "6 Seasons"
    },
    {
        id: 7,
        title: "Squid Game",
        genre: "Thriller / Drama",
        rating: 8.0,
        category: "Trending Now",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
        poster: "https://us-west-2.graphassets.com/Am5rKdLUrSZS2vQnL0H52z/WVCkca1BR26Td2FvAljl",
        banner: "https://us-west-2.graphassets.com/Am5rKdLUrSZS2vQnL0H52z/WVCkca1BR26Td2FvAljl",
        year: "2021",
        duration: "1 Season"
    },
    {
        id: 8,
        title: "Black Mirror",
        genre: "Sci-Fi / Drama",
        rating: 8.7,
        category: "Popular on Netflix",
        description: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
        poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
        banner: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600",
        year: "2011",
        duration: "6 Seasons"
    },
    {
        id: 9,
        title: "Money Heist",
        genre: "Crime / Thriller",
        rating: 8.2,
        category: "Trending Now",
        description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        poster: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800",
        banner: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=1600",
        year: "2017",
        duration: "5 Seasons"
    },
    {
        id: 10,
        title: "Ozark",
        genre: "Crime / Drama",
        rating: 8.5,
        category: "Top Rated",
        description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
        poster: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQegiP9ERNuNqZ7-8d_JlYWFW9FazEbPy77KiZEYRgLVrB1Hyn-UW1r_PjiZO1W88yvAc_mAeeH5CB4nUq0ujSHCVxrNWudVf5GAb4TNjva3oqW_KIe8WVV03IiCWD5oGTfd38JUe8jq7WEv_WuYqzR9rciA.jpg?r=869",
        banner: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQegiP9ERNuNqZ7-8d_JlYWFW9FazEbPy77KiZEYRgLVrB1Hyn-UW1r_PjiZO1W88yvAc_mAeeH5CB4nUq0ujSHCVxrNWudVf5GAb4TNjva3oqW_KIe8WVV03IiCWD5oGTfd38JUe8jq7WEv_WuYqzR9rciA.jpg?r=869",
        year: "2017",
        duration: "4 Seasons"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const movieGrid = document.getElementById('movie-grid');
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
    const heroImg = document.getElementById('hero-img');
    const heroRating = document.getElementById('hero-rating');
    const heroYear = document.getElementById('hero-year');
    const heroDuration = document.getElementById('hero-duration');
    const heroContent = document.getElementById('hero-content');
    const searchInput = document.getElementById('dashboard-search');
    const header = document.getElementById('main-header');

    const modal = document.getElementById('movie-modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalBanner = document.getElementById('modal-banner');
    const modalRating = document.getElementById('modal-rating');
    const modalYear = document.getElementById('modal-year');
    const modalDuration = document.getElementById('modal-duration');
    const closeModal = document.getElementById('close-modal');

    const featuredMovie = movies.find(m => m.category === 'Featured') || movies[0];
    updateHero(featuredMovie);
    renderMovies(movies);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = movies.filter(m =>
            m.title.toLowerCase().includes(term) ||
            m.genre.toLowerCase().includes(term)
        );
        renderMovies(filtered);
    });

    function updateHero(movie) {
        heroTitle.textContent = movie.title;
        heroDescription.textContent = movie.description;
        heroImg.src = movie.banner;
        heroRating.innerHTML = `<i class="fas fa-star mr-1"></i> ${movie.rating}`;
        heroYear.textContent = movie.year;
        heroDuration.textContent = movie.duration;
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }

    function renderMovies(movieList) {
        movieGrid.innerHTML = '';
        movieList.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card reveal';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="card-overlay">
                    <h4 class="font-bebas text-2xl mb-1">${movie.title}</h4>
                    <div class="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-gray-300">
                        <span>${movie.year}</span>
                        <span class="text-netflix-red"><i class="fas fa-star mr-1"></i> ${movie.rating}</span>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openMovieModal(movie));
            movieGrid.appendChild(card);
        });
    }

    function openMovieModal(movie) {
        modalTitle.textContent = movie.title;
        modalDescription.textContent = movie.description;
        modalBanner.src = movie.banner;
        modalRating.innerHTML = `<i class="fas fa-star mr-1"></i> ${movie.rating} Rating`;
        modalYear.textContent = movie.year;
        modalDuration.textContent = movie.duration;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => {
            modal.classList.add('active');
            modalContent.style.transform = 'scale(1)';
            modalContent.style.opacity = '1';
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeMovieModal() {
        modal.classList.remove('active');
        modalContent.style.transform = 'scale(0.95)';
        modalContent.style.opacity = '0';
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    closeModal.addEventListener('click', closeMovieModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeMovieModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMovieModal(); });
});
