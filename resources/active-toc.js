/**
 * 
 * @param {*} tocContainer 
 * use 
 * credit goes to https://tj.ie/building-a-table-of-contents-with-the-intersection-observer-api/
 * with tweak improvements. No dependencies.
 */
function activeToc(tocContainer) {

    if (document.querySelector && window.IntersectionObserver) {
        if (typeof tocContainer == 'string') {
            //assume tocContainer is a dom tree id        
            tocContainer = document.querySelector(tocContainer.charAt(0) == '#' ? tocContainer : '#' + tocContainer);
        }

        this.handleObserver = (entries, observer) => {
            entries.forEach(entry => {
                let href = `#${entry.target.getAttribute('id')}`;
                let link = this.links.find(l => l.getAttribute('href') === href);

                if (entry.isIntersecting) {
                    link.classList.add('is-visible')
                    this.previousSection = entry.target.getAttribute('id');
                } else {
                    link.classList.remove('is-visible');
                }

                this.highlightFirstActive();
            });
        }

        this.highlightFirstActive = () => {
            let firstVisibleLink = tocContainer.querySelector('.is-visible')

            this.links.forEach(link => {
                link.classList.remove('is-active');
            })

            if (firstVisibleLink) {
                firstVisibleLink.classList.add('is-active');
            }

            if (!firstVisibleLink && this.previousSection) {
                tocContainer.querySelector(
                    `a[href="#${this.previousSection}"]`
                ).classList.add('is-active');
            }
        }

        this.intersectionOptions = {
            rootMargin: '0px'
        }
        this.links = [...tocContainer.querySelectorAll('a')];

        this.headlines = this.links.map(link => {
            let id = link.getAttribute('href');
            return document.querySelector(id);
        });
        this.observer = new IntersectionObserver(this.handleObserver, this.intersectionOptions);
        this.headlines.forEach(headline => {
            if (headline) {
                this.observer.observe(headline);
            }
        });
    }
}