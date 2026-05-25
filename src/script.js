const tabs = ['home', 'news', 'projects', 'about', 'contact'];
let newsFilterTimer = 0;
let panelSwitchTimer = 0;
let introTimers = [];
let isTabVisible = true;
let introStarted = false;

function switchTab(activeTab) {
    if (!activeTab) return;
    const targetBtn = document.getElementById('nav-btn-' + activeTab);
    const targetPanel = document.getElementById('sec-' + activeTab);
    if (!targetBtn || !targetPanel) return;

    // --- داینامیک کردن زیر-منوهای سایدبار ---
    const filterProjects = document.getElementById('sidebar-project-filters');
    const subnavAbout = document.getElementById('sidebar-about-subnav');
    const filterNews = document.getElementById('sidebar-news-filters');

    // پنهان کردن همه زیرمنوها
    [filterProjects, subnavAbout, filterNews].forEach(el => {
        if (el) {
            el.classList.add('opacity-0', 'pointer-events-none');
            el.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    // نمایش زیرمنوی مربوط به تب فعال
    if (activeTab === 'projects' && filterProjects) {
        filterProjects.classList.remove('opacity-0', 'pointer-events-none');
        filterProjects.classList.add('opacity-100', 'pointer-events-auto');
    } else if (activeTab === 'about' && subnavAbout) {
        subnavAbout.classList.remove('opacity-0', 'pointer-events-none');
        subnavAbout.classList.add('opacity-100', 'pointer-events-auto');
    } else if (activeTab === 'news' && filterNews) {
        filterNews.classList.remove('opacity-0', 'pointer-events-none');
        filterNews.classList.add('opacity-100', 'pointer-events-auto');
    }

    const currentBtn = document.querySelector('#main-nav [aria-selected="true"]');
    if (currentBtn && currentBtn.id === targetBtn.id) return;
    tabs.forEach(tab => {
        const btn = document.getElementById('nav-btn-' + tab);
        if (!btn) return;
        btn.setAttribute('aria-selected', 'false');
        btn.setAttribute('tabindex', '-1');
    });
    if (currentBtn) {
        const currentPanelId = currentBtn.getAttribute('aria-controls');
        const currentPanel = currentPanelId ? document.getElementById(currentPanelId) : null;
        if (currentPanel) {
            currentPanel.classList.remove('z-0');
            currentPanel.classList.add('z-10');
            currentPanel.classList.add('opacity-0', 'pointer-events-none');
            currentPanel.classList.remove('opacity-100');
            window.clearTimeout(panelSwitchTimer);
            panelSwitchTimer = window.setTimeout(() => {
                if (currentPanel.classList.contains('opacity-0') && currentPanel !== targetPanel) {
                    currentPanel.classList.remove('z-10');
                    currentPanel.classList.add('z-0');
                }
            }, 260);
        }
    }
    targetBtn.setAttribute('aria-selected', 'true');
    targetBtn.setAttribute('tabindex', '0');
    targetPanel.classList.remove('z-0', 'opacity-0', 'pointer-events-none');
    targetPanel.classList.add('z-10', 'opacity-100');
}

function setAboutActive(sectionId) {
    // حل باگ نام آیدی: تغییر from '#about-subnav' to '#sidebar-about-subnav'
    const buttons = document.querySelectorAll('#sidebar-about-subnav button');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-target') === sectionId) {
            btn.classList.add('sidebar-nav-active');
            btn.classList.remove('text-[#8e8e8e]');
        } else {
            btn.classList.remove('sidebar-nav-active');
            btn.classList.add('text-[#8e8e8e]');
        }
    });
}

function scrollToAbout(sectionId) {
    const targetElement = document.getElementById('about-' + sectionId);
    const container = document.getElementById('about-scroll-container');
    if (targetElement && container) {
        const targetTop = Math.max(targetElement.offsetTop - 28, 0);
        container.scrollTo({ top: targetTop, behavior: 'smooth' });
        setAboutActive(sectionId);
    }
}

function filterNews(year, clickedBtn) {
    const list = document.getElementById('news-articles');
    const articles = document.querySelectorAll('.news-article-item');

    // مدیریت کلاس اکتیو در سایدبار
    const allBtns = document.querySelectorAll('#sidebar-news-filters button');
    allBtns.forEach(btn => btn.classList.remove('sidebar-nav-active'));
    clickedBtn.classList.add('sidebar-nav-active');

    window.clearTimeout(newsFilterTimer);
    if (list) list.classList.add('news-switching');
    newsFilterTimer = window.setTimeout(() => {
        articles.forEach(article => {
            const shouldShow = year === 'all' || article.getAttribute('data-year') === year;
            article.classList.toggle('hidden-news', !shouldShow);
        });
        if (list) {
            requestAnimationFrame(() => { list.classList.remove('news-switching'); });
        }
    }, 180);
}

function filterProjects(filter, clickedBtn) {
    const allBtns = document.querySelectorAll('#sidebar-project-filters button');
    allBtns.forEach(btn => btn.classList.remove('sidebar-nav-active'));
    clickedBtn.classList.add('sidebar-nav-active');
}

function clearIntroTimers() {
    introTimers.forEach(t => clearTimeout(t));
    introTimers = [];
}

const SVG_CENTERS = {
    blue: { x: 421.5, y: 526.5 },
    p1: { x: 152.3, y: 526.9 },
    p3: { x: 309.5, y: 200.9 },
    p4: { x: 532.2, y: 200.5 },
    p5: { x: 643.0, y: 526.6 }
};

function updateIntroPieceOffsets() {
    const wrapper = document.getElementById('intro-logo-wrap');
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const scaleX = rect.width / 800;
    const scaleY = rect.height / 786;
    const blueX = SVG_CENTERS.blue.x * scaleX;
    const blueY = SVG_CENTERS.blue.y * scaleY;

    ['p1', 'p3', 'p4', 'p5'].forEach(id => {
        const piece = document.getElementById(`intro-piece-${id}`);
        if (!piece) return;
        const c = SVG_CENTERS[id];
        const finalX = c.x * scaleX;
        const finalY = c.y * scaleY;
        const offX = finalX - blueX;
        const offY = finalY - blueY;
        piece.style.setProperty('--off-x', offX + 'px');
        piece.style.setProperty('--off-y-initial', '0px');
        piece.style.setProperty('--off-y-final', offY + 'px');
    });
}

function measureIntroTarget() {
    const sidebarLogo = document.querySelector('[data-anim-target="logo-container"]');
    const introLogoWrap = document.getElementById('intro-logo-wrap');
    const root = document.documentElement;
    if (!sidebarLogo || !introLogoWrap) return;
    const prevOpacity = sidebarLogo.style.opacity;
    sidebarLogo.style.opacity = '0';
    sidebarLogo.classList.add('logo-no-transition');
    sidebarLogo.setAttribute('data-state', 'idle');
    requestAnimationFrame(() => {
        const sidebarRect = sidebarLogo.getBoundingClientRect();
        const sidebarCenterX = sidebarRect.left + sidebarRect.width / 2;
        const sidebarCenterY = sidebarRect.top + sidebarRect.height / 2;
        const introRect = introLogoWrap.getBoundingClientRect();
        const introCenterX = introRect.left + introRect.width / 2;
        const introCenterY = introRect.top + introRect.height / 2;
        const targetX = sidebarCenterX - introCenterX;
        const targetY = sidebarCenterY - introCenterY;
        const targetScale = sidebarRect.width / introRect.width;
        root.style.setProperty('--intro-fly-x', targetX + 'px');
        root.style.setProperty('--intro-fly-y', targetY + 'px');
        root.style.setProperty('--intro-fly-scale', targetScale.toFixed(4));
        sidebarLogo.style.opacity = prevOpacity;
        sidebarLogo.classList.remove('logo-no-transition');
    });
}

function startIntroSequence() {
    if (introStarted) return;
    introStarted = true;
    clearIntroTimers();
    updateIntroPieceOffsets();

    const overlay = document.getElementById('intro-overlay');
    const textBlock = document.getElementById('intro-text-block');
    const body = document.body;
    if (!overlay) return;

    if (textBlock) textBlock.style.opacity = '0';
    introTimers.push(setTimeout(() => { overlay.classList.add('intro-phase-1'); }, 300));
    introTimers.push(setTimeout(() => { overlay.classList.add('intro-phase-2'); }, 1000));
    introTimers.push(setTimeout(() => { body.classList.add('content-visible'); }, 1300));
    introTimers.push(setTimeout(() => { overlay.classList.add('intro-phase-3'); }, 1800));
    introTimers.push(setTimeout(() => { overlay.classList.add('intro-fade-out'); }, 2600));

    introTimers.push(setTimeout(() => {
        overlay.classList.add('intro-hidden');
        body.setAttribute('data-phase', 'idle');
        const sidebarLogo = document.querySelector('[data-anim-target="logo-container"]');
        if (sidebarLogo) sidebarLogo.setAttribute('data-state', 'idle');
    }, 3400));
}

function snapToIdleLogo() {
    const logo = document.querySelector('[data-anim-target="logo-container"]');
    if (!logo) return;
    logo.classList.add('logo-no-transition');
    logo.setAttribute('data-state', 'idle');
    logo.removeAttribute('data-remix');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => { logo.classList.remove('logo-no-transition'); });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('intro-overlay');
    const body = document.body;
    const logo = document.querySelector('[data-anim-target="logo-container"]');
    const nav = document.getElementById('main-nav');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const aboutContainer = document.getElementById('about-scroll-container');
    const aboutSections = ['brand', 'leadership', 'team', 'history', 'expertise', 'competitions']
        .map(key => document.getElementById('about-' + key)).filter(Boolean);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            body.classList.add('page-ready');
            updateIntroPieceOffsets();
            window.addEventListener('resize', updateIntroPieceOffsets);
        });
    });

    const updateNavOrientation = () => {
        if (!nav) return;
        nav.setAttribute('aria-orientation', desktopQuery.matches ? 'vertical' : 'horizontal');
    };
    updateNavOrientation();
    if (typeof desktopQuery.addEventListener === 'function') {
        desktopQuery.addEventListener('change', updateNavOrientation);
    } else if (typeof desktopQuery.addListener === 'function') {
        desktopQuery.addListener(updateNavOrientation);
    }

    const navToPartMap = {
        'home': 'part3',
        'news': 'part4',
        'projects': 'part2',
        'about': 'part5',
        'contact': 'part1'
    };

    const navButtons = tabs.map(tab => document.getElementById('nav-btn-' + tab)).filter(Boolean);

    navButtons.forEach((btn, index) => {
        btn.addEventListener('keydown', event => {
            const isNext = event.key === 'ArrowDown' || event.key === 'ArrowRight';
            const isPrev = event.key === 'ArrowUp' || event.key === 'ArrowLeft';
            const isHome = event.key === 'Home';
            const isEnd = event.key === 'End';
            if (!isNext && !isPrev && !isHome && !isEnd) return;
            event.preventDefault();
            let nextIndex = index;
            if (isNext) nextIndex = (index + 1) % navButtons.length;
            if (isPrev) nextIndex = (index - 1 + navButtons.length) % navButtons.length;
            if (isHome) nextIndex = 0;
            if (isEnd) nextIndex = navButtons.length - 1;
            const targetBtn = navButtons[nextIndex];
            const targetTab = targetBtn.id.replace('nav-btn-', '');
            switchTab(targetTab);
            targetBtn.focus();
        });

        btn.addEventListener('mouseenter', () => {
            const tab = btn.id.replace('nav-btn-', '');
            const partId = navToPartMap[tab];
            const part = document.getElementById(partId);

            if (part && document.body.getAttribute('data-phase') === 'idle') {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        part.classList.add('hover-active');
                    });
                });
            }
        });

        btn.addEventListener('mouseleave', () => {
            const tab = btn.id.replace('nav-btn-', '');
            const partId = navToPartMap[tab];
            const part = document.getElementById(partId);

            if (part) {
                part.classList.remove('hover-active');
            }
        });

        btn.addEventListener('click', () => {
            const tab = btn.id.replace('nav-btn-', '');
            const partId = navToPartMap[tab];
            const part = document.getElementById(partId);

            if (part && document.body.getAttribute('data-phase') === 'idle') {
                part.animate([
                    { transform: 'scale(1.09)' },
                    { transform: 'scale(0.94)' },
                    { transform: 'scale(1.09)' }
                ], {
                    duration: 400,
                    easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
                });
            }
        });
    });

    // ── Infinite Quantum Idle Scroll for Projects ──
    const columns = document.querySelectorAll('.project-col');
    let isAnyProjectHovered = false;

    if (columns.length > 0) {
        columns.forEach((col, index) => {
            const originals = Array.from(col.children);
            for (let i = 0; i < 4; i++) {
                originals.forEach(item => col.appendChild(item.cloneNode(true)));
            }

            col.addEventListener('mouseenter', () => isAnyProjectHovered = true);
            col.addEventListener('mouseleave', () => isAnyProjectHovered = false);
            col.addEventListener('touchstart', () => isAnyProjectHovered = true, { passive: true });
            col.addEventListener('touchend', () => setTimeout(() => isAnyProjectHovered = false, 1500));

            const direction = (index % 2 === 0) ? 1 : -1;
            requestAnimationFrame(() => {
                if (direction === -1) col.scrollTop = col.scrollHeight / 2;
            });

            col.addEventListener('scroll', () => {
                if (originals.length === 0) return;
                const itemHeight = originals[0].getBoundingClientRect().height;
                const gap = parseInt(window.getComputedStyle(col).gap) || 0;
                const groupHeight = originals.length * (itemHeight + gap);

                if (col.scrollTop >= groupHeight * 3) {
                    col.scrollTop -= groupHeight;
                } else if (col.scrollTop <= groupHeight * 0.5) {
                    col.scrollTop += groupHeight;
                }
            }, { passive: true });
        });

        let currentScrollingCol = 0;
        setInterval(() => {
            const activePanel = document.querySelector('.tab-panel.opacity-100');
            if (activePanel && activePanel.id === 'sec-projects' && !isAnyProjectHovered) {
                const col = columns[currentScrollingCol];
                const direction = (currentScrollingCol % 2 === 0) ? 1 : -1;

                if (col && col.children.length > 0) {
                    const itemHeight = col.children[0].getBoundingClientRect().height;
                    const gap = parseInt(window.getComputedStyle(col).gap) || 0;
                    const shift = (itemHeight + gap) * direction;

                    col.scrollBy({ top: shift, behavior: 'smooth' });
                }
                currentScrollingCol = (currentScrollingCol + 1) % columns.length;
            }
        }, 2400);
    }

    // ── Precise Scrollspy for About Section ──
    if (aboutContainer && aboutSections.length > 0) {
        let aboutTicking = false;

        const syncAboutActive = () => {
            // بررسی اینکه آیا به انتهای بخش رسیده‌ایم یا خیر
            const bottomGap = aboutContainer.scrollHeight - aboutContainer.scrollTop - aboutContainer.clientHeight;

            // افزایش تلورانس از 24 به 60 برای اطمینان از کلیک خوردن بخش آخر در تمام مرورگرها
            if (bottomGap <= 60) {
                // اگر به انتهای لیست رسیدیم، مستقیماً بخش آخر (Competitions) را روشن کن
                setAboutActive('competitions');
                return;
            }

            // در غیر این صورت، بر اساس وسط صفحه بررسی کن
            const probeLine = aboutContainer.scrollTop + (aboutContainer.clientHeight * 0.4);
            let activeId = 'brand';

            aboutSections.forEach(section => {
                if (probeLine >= section.offsetTop) {
                    activeId = section.id.replace('about-', '');
                }
            });

            setAboutActive(activeId);
        };

        setAboutActive('brand');
        syncAboutActive();

        aboutContainer.addEventListener('scroll', () => {
            if (aboutTicking) return;
            aboutTicking = true;
            requestAnimationFrame(() => {
                syncAboutActive();
                aboutTicking = false;
            });
        }, { passive: true });

        window.addEventListener('resize', syncAboutActive);
    }

    measureIntroTarget();
    window.addEventListener('resize', () => {
        clearTimeout(window._resizeDebounce);
        window._resizeDebounce = setTimeout(() => { measureIntroTarget(); }, 300);
    });

    if (prefersReducedMotion) {
        if (overlay) {
            overlay.classList.add('intro-fade-out');
            overlay.classList.add('intro-hidden');
        }
        body.classList.add('content-visible');
        body.setAttribute('data-phase', 'idle');
        if (logo) logo.setAttribute('data-state', 'idle');
        const textBlock = document.getElementById('intro-text-block');
        if (textBlock) textBlock.style.display = 'none';
        snapToIdleLogo();
        introStarted = true;
    } else if (overlay) {
        body.setAttribute('data-phase', 'intro');
        if (logo) logo.setAttribute('data-state', 'idle');
        const triggerIntro = () => startIntroSequence();

        introTimers.push(setTimeout(triggerIntro, 3500));

        overlay.addEventListener('click', triggerIntro, { once: true });
        document.addEventListener('click', function docClickTrigger(e) {
            if (introStarted) return;
            if (e.target === overlay || overlay.contains(e.target)) return;
            triggerIntro();
            document.removeEventListener('click', docClickTrigger);
        }, { once: false });
    }

    document.addEventListener('visibilitychange', () => {
        isTabVisible = !document.hidden;
        if (document.hidden && !introStarted && body.getAttribute('data-phase') !== 'idle') {
            if (overlay) {
                overlay.classList.add('intro-fade-out');
                overlay.classList.add('intro-hidden');
            }
            body.classList.add('content-visible');
            body.setAttribute('data-phase', 'idle');
            if (logo) logo.setAttribute('data-state', 'idle');
            const textBlock = document.getElementById('intro-text-block');
            if (textBlock) textBlock.style.display = 'none';
            snapToIdleLogo();
            introStarted = true;
            clearIntroTimers();
        }
    });

    window.addEventListener('pagehide', () => {
        clearIntroTimers();
    });
    window.addEventListener('pageshow', (e) => {
        if (e.persisted) {
            if (overlay && !introStarted) {
                overlay.classList.add('intro-fade-out');
                overlay.classList.add('intro-hidden');
            }
            body.classList.add('content-visible');
            body.setAttribute('data-phase', 'idle');
            if (logo) logo.setAttribute('data-state', 'idle');
            const textBlock = document.getElementById('intro-text-block');
            if (textBlock) textBlock.style.display = 'none';
            snapToIdleLogo();
            introStarted = true;
            clearIntroTimers();
        }
    });
    initHomeMatrix();
});

// ── Project Details Overlay Controllers (Dynamic Gallery) ──
const projectImages = {
    1: ['angular-leaning-terracotta-glass-museum.jpg', 'colorful-curved-facade-triangular-windows.jpg', 'concrete-cantilever-modernist-corner-facade.jpg', 'curved-concrete-building-blue-glass-windows.jpg', 'curved-modern-glass-building-metal-louvers.jpg'],
    2: ['colorful-curved-facade-triangular-windows.jpg', 'curved-white-building-tall-glass-arch.jpg', 'dark-brutalist-geometric-patterned-facade.jpg', 'darya-shkapina.jpg', 'double-tree-by-hilton-nice-centre.jpg'],
    3: ['concrete-cantilever-modernist-corner-facade.jpg', 'experimenta-science-centre-stoneware-flooring-casalgrande-padana.jpg', 'futuristic-geometric-glass-canopy-copper-facade.jpg', 'geometric-glass-honeycomb-facade.jpg', 'germanys-axel-springer-group.jpg'],
    4: ['curved-concrete-building-blue-glass-windows.jpg', 'harpa-concert-hall-glass-honeycomb-facade.jpg', 'howard-bouchevereau.jpg', 'minimalist-white-architecture-cantilevered-volume.jpg', 'modern-brick-building-corner-windows-sky.jpg'],
    5: ['dark-brutalist-geometric-patterned-facade.jpg', 'modern-cantilevered-office-building-waterfront.jpg', 'modern-white-building-curved-glass-stairs.jpg', 'monochrome-cylindrical-building-geometric-facade.jpg', 'parametric-curved-glass-amber-grid-architecture.jpg'],
    6: ['darya-shkapina.jpg', 'pexels-michael-pointner-134459625-10209033.jpg', 'pierres-vives.jpg', 'rock-and-roll-hall-of-fame-cleveland-architecture.jpg', 'sidra-medicine-hospital-abudhabi-cantilevered-glass.jpg'],
    7: ['double-tree-by-hilton-nice-centre.jpg', 'silver-geometric-origami-metal-facade.jpg', 'stacked-cantilevered-glass-volumes-architecture.jpg', 'stepped-dark-glass-facade-architecture-twilight.jpg', 'undulating-metallic-reflective-architecture.jpg'],
    8: ['experimenta-science-centre-stoneware-flooring-casalgrande-padana.jpg', 'zaha-hadid-heydar-aliyev-center-baku-facade.jpg', 'angular-leaning-terracotta-glass-museum.jpg', 'concrete-cantilever-modernist-corner-facade.jpg', 'curved-modern-glass-building-metal-louvers.jpg'],
    9: ['howard-bouchevereau.jpg', 'colorful-curved-facade-triangular-windows.jpg', 'dark-brutalist-geometric-patterned-facade.jpg', 'double-tree-by-hilton-nice-centre.jpg', 'geometric-glass-honeycomb-facade.jpg']
};

function openProjectDetail(title, year, category, projectId) {
    const overlay = document.getElementById('project-detail-overlay');
    const titleEl = document.getElementById('pd-title');
    const metaEl = document.getElementById('pd-meta');
    const mainImgEl = document.getElementById('pd-main-img');
    const galImages = document.querySelectorAll('.pd-gallery-img');

    if (titleEl) titleEl.innerText = title;
    if (metaEl) metaEl.innerText = `${year} | ${category}`;

    const imgs = projectImages[projectId];
    if (imgs) {
        // استفاده از setProperty با important برای غلبه بر CSS پیش‌فرضِ panel-shell
        if (mainImgEl) mainImgEl.style.setProperty('background-image', `url('../assets/pics/Buildings/${imgs[0]}')`, 'important');

        galImages.forEach((el, index) => {
            if (imgs[index + 1]) {
                el.style.setProperty('background-image', `url('../assets/pics/Buildings/${imgs[index + 1]}')`, 'important');
            }
        });
    }

    if (overlay) {
        overlay.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
        overlay.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');
    }
}

function closeProjectDetail() {
    const overlay = document.getElementById('project-detail-overlay');
    if (overlay) {
        overlay.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
        overlay.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    }
}

function closeProjectDetail() {
    const overlay = document.getElementById('project-detail-overlay');

    // بازگرداندن پنل به سمت راست
    if (overlay) {
        overlay.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
        overlay.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
    }
}

// ── Home Page 10x10 Matrix Generator (Wave Sync) ──
function initHomeMatrix() {
    const grid = document.getElementById('home-matrix-grid');
    if (!grid) return;

    const images = [
        '../assets/pics/Buildings/angular-leaning-terracotta-glass-museum.jpg',
        '../assets/pics/Buildings/colorful-curved-facade-triangular-windows.jpg',
        '../assets/pics/Buildings/concrete-cantilever-modernist-corner-facade.jpg',
        '../assets/pics/Buildings/curved-concrete-building-blue-glass-windows.jpg',
        '../assets/pics/Buildings/dark-brutalist-geometric-patterned-facade.jpg',
        '../assets/pics/Buildings/double-tree-by-hilton-nice-centre.jpg'
    ];

    for (let i = 0; i < 100; i++) {
        const item = document.createElement('div');
        const randomImg = images[Math.floor(Math.random() * images.length)];

        // محاسبه ردیف و ستون برای ایجاد موج قطری (Diagonal Wave)
        const row = Math.floor(i / 10);
        const col = i % 10;
        const distance = row + col;

        // تقسیم به ۵ گروه دقیقاً هماهنگ با ۵ تایمر لوگو
        const waveGroup = (distance % 5) + 1;

        item.className = `matrix-item matrix-wave-${waveGroup} w-full h-full bg-cover bg-center`;
        item.style.backgroundImage = `url('${randomImg}')`;

        grid.appendChild(item);
    }
}