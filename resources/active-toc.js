/**
 * 
 * @param {*} tocContainer 
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

                this.highlightActive();
            });
        }


        this.highlightActive = () => {
            let hasVisible = false;
            this.links.forEach(link => {
                link.classList.remove('is-active');
                if (link.classList.contains('is-visible')) {
                    hasVisible = true;
                }
            });

            if (!hasVisible) {
                for (let i = this.headings.length - 1; i > 0; i--) {
                    if (this.headings[i] && this.headings[i].offsetTop <= window.pageYOffset) {
                        tocContainer.querySelector(
                            `a[href="#${this.headings[i].id}"]`
                        ).classList.add('is-active');
                        break;
                    }
                }
            }
        }

        this.intersectionOptions = {
            rootMargin: '0px'
        }
        this.links = [...tocContainer.querySelectorAll('a')];

        this.headings = this.links.map(link => {
            let id = link.getAttribute('href');
            return document.querySelector(id);
        });
        this.observer = new IntersectionObserver(this.handleObserver, this.intersectionOptions);
        this.headings.forEach(heading => {
            if (heading) {
                this.observer.observe(heading);
            }
        });
    }
}