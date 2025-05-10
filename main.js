document.addEventListener('DOMContentLoaded', function() {
    // Generate TOC
    const tocList = document.querySelector('.toc-list');
    console.log('TOC list element:', tocList);
    
    if (tocList) {
        // Clear existing TOC
        tocList.innerHTML = '';

        // Get all headings
        const headings = document.querySelectorAll('h1, h2, h3');
        console.log('Found headings:', headings.length);
        
        // Generate TOC items
        headings.forEach(heading => {
            const tocItem = document.createElement('li');
            const tocLink = document.createElement('a');
            
            // Get or generate ID
            let id = heading.id;
            if (!id) {
                id = heading.textContent.toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                heading.id = id;
            }
            
            tocLink.href = `#${id}`;
            tocLink.textContent = heading.textContent;
            tocLink.className = `toc-${heading.tagName.toLowerCase()}`;
            
            tocItem.appendChild(tocLink);
            tocList.appendChild(tocItem);
        });
    }

    // Add smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calculate the offset to keep the main nav visible
                const offset = document.querySelector('.main-nav').offsetHeight;
                
                // Scroll to target with offset and smooth behavior
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
});
