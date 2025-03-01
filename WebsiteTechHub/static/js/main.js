document.addEventListener('DOMContentLoaded', function() {
    // Handle video loading and autoplay
    const video = document.getElementById('bgVideo');
    if (video) {
        // Force video playback
        const playVideo = function() {
            video.play().catch(function(error) {
                console.log("Video autoplay failed:", error);
                // Retry playback on user interaction
                document.addEventListener('click', function() {
                    video.play();
                }, { once: true });
            });
        };

        playVideo();

        // Ensure video stays playing
        video.addEventListener('ended', playVideo, false);
        video.addEventListener('pause', playVideo, false);
    }

    // Add fade-in animation to content cards
    const cards = document.querySelectorAll('.profile-card, .content-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200);
    });
});