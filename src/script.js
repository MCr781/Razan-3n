const baseTranslations = {
    "HOME": "خانه", "NEWS": "اخبار", "PROJECTS": "پروژه‌ها", "ABOUT": "درباره ما", "CONTACT": "تماس با ما",
    "ALL": "همه", "All": "همه", "Apartment": "آپارتمان", "Villa": "ویلا", "Commercial": "تجاری", "COMMERCIAL": "تجاری", "Health & Care": "درمانی", "HEALTH & CARE": "درمانی", "Office": "اداری", "OFFICE": "اداری", "Complex": "مجتمع", "COMPLEX": "مجتمع", "Interior": "داخلی", "INTERIOR": "داخلی", "Landscape": "لندسکیپ", "LANDSCAPE": "لندسکیپ", "URBAN": "شهری",
    "Brand": "برند", "Resume": "رزومه", "Team now": "تیم فعلی", "Team history": "تاریخچه تیم", "Design & Construction": "طراحی و ساخت", "Competitions": "مسابقات",
    "Tehran Commercial Complex": "مجتمع تجاری تهران", "Urban Pocket Landscape": "منظر شهری پاکت", "Laleh Villa": "ویلا لاله", "Health Cluster": "خوشه سلامت", "Office Atrium": "آتریوم اداری", "Karaj Riverfront": "حاشیه رودخانه کرج", "Community School": "مدرسه اجتماعی", "Civic Gateway": "دروازه شهری", "Flexibility Hub": "قطب انعطاف‌پذیری",
    "About Razan": "درباره رازان", "Brand Philosophy": "فلسفه برند",
    "Razan sees architecture as a layered act of listening: to site, climate, culture, and program. We map constraints early, then translate them into clear spatial systems that age with dignity and perform efficiently.": "رازان معماری را عمل لایه‌مند شنیدن می‌داند: به سایت، اقلیم، فرهنگ و کاربری. ما محدودیت‌ها را زودهنگام بررسی کرده و آن‌ها را به سیستم‌های فضایی واضحی تبدیل می‌کنیم که با وقار ماندگار شده و عملکرد بالایی دارند.",
    "Leadership & Resume": "رهبری و رزومه", "Principal Architect": "معمار ارشد", "M.Arch, 18+ Years": "کارشناس ارشد معماری، +۱۸ سال",
    "Leads concept strategy, urban integration, and design QA across mixed-use and civic projects.": "راهبری استراتژی کانسپت، ادغام شهری و تضمین کیفیت طراحی در پروژه‌های عمومی و چندمنظوره.",
    "Technical Director": "مدیر فنی", "PE, Construction Systems": "مهندس ارشد، سیستم‌های ساخت",
    "Oversees coordination packages, constructability checks, and procurement interface.": "نظارت بر بسته‌های هماهنگی، کنترل‌های قابلیت ساخت و فرآیند تدارکات.",
    "Team Now": "تیم فعلی", "Architecture": "معماری", "12 Designers": "۱۲ طراح", "Urban + Landscape": "شهرسازی + منظر", "6 Specialists": "۶ متخصص", "Technical Delivery": "تحویل فنی", "9 Engineers": "۹ مهندس",
    "Team History": "تاریخچه تیم",
    "From a compact design studio in 2000 to a multidisciplinary practice, the firm evolved through public-sector planning, healthcare delivery, and private mixed-use commissions. This trajectory shaped a process-centric culture rooted in coordination and clarity.": "از یک استودیوی طراحی کوچک در سال ۲۰۰۰ تا یک دفتر چندتخصصی، این شرکت از طریق پروژه‌های دولتی، درمانی و کاربری‌های مختلط خصوصی تکامل یافت. این مسیر، فرهنگی فرآیند-محور مبتنی بر هماهنگی و شفافیت را شکل داد.",
    "Design Package": "طراحی فاز یک", "Construction Docs": "نقشه‌های اجرایی", "2026 Civic Gateway - Finalist": "۲۰۲۶ دروازه شهری - فینالیست", "2024 Health Campus - 2nd Prize": "۲۰۲۴ پردیس سلامت - رتبه دوم", "2023 Riverfront Renewal - Shortlist": "۲۰۲۳ نوسازی حاشیه رودخانه - لیست منتخب",
    "Razan shortlisted for Tehran Civic Gateway": "رازان در لیست نهایی دروازه شهری تهران", "Our new sustainability framework officially launched": "رونمایی رسمی از چارچوب جدید پایداری ما", "BIM workflow audit improves delivery speed by 17%": "ممیزی گردش کار BIM سرعت تحویل را ۱۷٪ افزایش داد", "Award-winning landscape integrated into our recent commercial design": "ادغام منظر برنده جایزه در طراحی تجاری اخیر ما", "North Tehran residential complex enters final commissioning phase": "مجتمع مسکونی شمال تهران وارد فاز نهایی تحویل شد", "Razan experts featured in the national urban development panel": "حضور کارشناسان رازان در پنل ملی توسعه شهری", "Workspace flexibility report formally published by Razan Studio": "گزارش انعطاف‌پذیری فضای کار رسماً توسط رازان منتشر شد", "Community school campus receives regional planning approval": "پردیس مدرسه اجتماعی تأییدیه برنامه‌ریزی منطقه‌ای گرفت",
    "Apr 12, 2026": "۲۳ فروردین ۱۴۰۵", "Jan 05, 2026": "۱۵ دی ۱۴۰۴", "Dec 09, 2025": "۱۸ آذر ۱۴۰۴", "Jul 22, 2025": "۳۱ تیر ۱۴۰۴", "Oct 21, 2024": "۳۰ مهر ۱۴۰۳", "Mar 14, 2024": "۲۴ اسفند ۱۴۰۲", "Jun 16, 2023": "۲۶ خرداد ۱۴۰۲", "May 02, 2022": "۱۲ اردیبهشت ۱۴۰۱",
    "Back to Selected Works": "بازگشت به پروژه‌ها", "Project Title": "عنوان پروژه", "Project Narrative": "شرح پروژه", "Location": "مکان", "Tehran, Iran": "تهران، ایران", "Area": "مساحت", "12,500 sqm": "۱۲,۵۰۰ متر مربع", "Status": "وضعیت", "Completed": "تکمیل شده", "Gallery": "گالری",
    "Contact": "تماس", "Main Office Map": "نقشه دفتر مرکزی", "Site Visit Map": "نقشه محل کارگاه", "Get in Touch": "ارتباط با ما",
    "For collaborations, competition teams, and project inquiries, contact the coordination desk and we will route your request to the relevant group.": "برای همکاری‌ها، مسابقات و درخواست‌های پروژه، با میز هماهنگی تماس بگیرید تا درخواست شما به بخش مربوطه ارجاع داده شود.",
    "Tel": "تلفن", "Mobile": "موبایل", "Fax": "فکس", "Email": "ایمیل", "Address": "آدرس", "[Insert Tel]": "[درج تلفن]", "[Insert Mobile]": "[درج موبایل]", "[Insert Fax]": "[درج فکس]", "[Insert Email]": "[درج ایمیل]", "[Insert Address]": "[درج آدرس]", "Name": "نام", "Your Name": "نام شما", "your@email.com": "ایمیل شما@email.com", "Message": "پیام", "Tell us about your inquiry...": "پیام خود را بنویسید...", "Send Message": "ارسال پیام", "News": "اخبار"
};

const translations = {
    "fa": baseTranslations,
    "en": Object.keys(baseTranslations).reduce((acc, key) => { acc[baseTranslations[key]] = key; return acc; }, {})
};

function walkAndTranslate(node, lang) {
    if (node.nodeType === 3) { 
        let text = node.nodeValue.trim().replace(/\s+/g, ' ');
        if (text && translations[lang] && translations[lang][text]) {
            node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translations[lang][text]);
        }
    } else if (node.nodeType === 1 && !['SCRIPT', 'STYLE', 'SVG'].includes(node.nodeName)) {
        if (node.placeholder && translations[lang] && translations[lang][node.placeholder.trim()]) {
            node.placeholder = translations[lang][node.placeholder.trim()];
        }
        node.childNodes.forEach(child => walkAndTranslate(child, lang));
    }
}

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
    const globalSocialIcons = document.getElementById('global-social-icons');

    // پنهان کردن همه زیرمنوها
    [filterProjects, subnavAbout, filterNews].forEach(el => {
        if (el) {
            el.classList.add('opacity-0', 'pointer-events-none');
            el.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    if (globalSocialIcons) {
        if (activeTab === 'home' || activeTab === 'contact') {
            globalSocialIcons.classList.remove('opacity-0', 'pointer-events-none');
            globalSocialIcons.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            globalSocialIcons.classList.add('opacity-0', 'pointer-events-none');
            globalSocialIcons.classList.remove('opacity-100', 'pointer-events-auto');
        }
    }

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
    introTimers.push(setTimeout(() => { overlay.classList.add('intro-phase-2'); }, 1150));
    introTimers.push(setTimeout(() => { body.classList.add('content-visible'); }, 1300));
    introTimers.push(setTimeout(() => { overlay.classList.add('intro-phase-3'); }, 2000));
    introTimers.push(setTimeout(() => { overlay.classList.add('intro-fade-out'); }, 2800));

    introTimers.push(setTimeout(() => {
        overlay.classList.add('intro-hidden');
        body.setAttribute('data-phase', 'idle');
        const sidebarLogo = document.querySelector('[data-anim-target="logo-container"]');
        if (sidebarLogo) sidebarLogo.setAttribute('data-state', 'idle');
    }, 3600));
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
                if (originals.length > 0) {
                    const itemHeight = originals[0].getBoundingClientRect().height;
                    const gap = parseInt(window.getComputedStyle(col).gap) || 0;
                    const groupHeight = originals.length * (itemHeight + gap);
                    if (direction === -1) {
                        col.scrollTop = groupHeight * 2; // Perfectly aligned to items
                    } else {
                        col.scrollTop = groupHeight;
                    }
                }
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

                    col.style.scrollSnapType = 'none';
                    col.scrollBy({ top: shift, behavior: 'smooth' });
                    setTimeout(() => { col.style.scrollSnapType = ''; }, 600);
                }
                currentScrollingCol = (currentScrollingCol + 1) % columns.length;
            }
        }, 2400);
    }

    // ── Precise Scrollspy for About Section ──
    if (aboutContainer && aboutSections.length > 0) {
        let aboutTicking = false;

        const syncAboutActive = () => {
            const bottomGap = aboutContainer.scrollHeight - aboutContainer.scrollTop - aboutContainer.clientHeight;

            if (bottomGap <= 60) {
                setAboutActive('competitions');
                return;
            }

            const probeLine = aboutContainer.scrollTop + 60;
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

    // ── Scroll Progress Bars (Feature 5) ──
    const setupProgressBar = (containerSelector, progressId) => {
        const container = document.querySelector(containerSelector);
        const progress = document.getElementById(progressId);
        if (!container || !progress) return;

        const updateProgress = () => {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
            // حداقل اندازه برای اینکه دیده شود
            const width = Math.max(5, scrollPercent);
            progress.style.width = width + '%';
        };

        container.addEventListener('scroll', updateProgress, { passive: true });
        // Initial setup
        updateProgress();
        // Update on tab switch or resize
        window.addEventListener('resize', updateProgress);
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => setTimeout(updateProgress, 600));
        });
    };

    setupProgressBar('#sec-news .scroll-clean', 'progress-news');
    setupProgressBar('#about-scroll-container', 'progress-about');
    setupProgressBar('#sec-contact .scroll-clean', 'progress-contact');

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

    const lang = document.documentElement.lang || 'en';
    const t = (text) => (translations[lang] && translations[lang][text]) ? translations[lang][text] : text;

    if (titleEl) titleEl.innerText = t(title);
    if (metaEl) metaEl.innerText = `${year} | ${t(category)}`;

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

    const items = [];

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
        // اضافه کردن ترانزیشن برای تغییر نرم عکس (فقط opacity)
        item.style.transition = 'opacity 0.5s ease';

        grid.appendChild(item);
        items.push(item);
    }

    // تغییر عکس رندوم هر ۳ ثانیه
    setInterval(() => {
        if (items.length === 0) return;
        const activePanel = document.querySelector('.tab-panel.opacity-100');
        if (activePanel && activePanel.id === 'sec-home') {
            const randomItemIndex = Math.floor(Math.random() * items.length);
            const randomImageIndex = Math.floor(Math.random() * images.length);
            const item = items[randomItemIndex];
            
            // Ensure relative positioning
            if (getComputedStyle(item).position === 'static') {
                item.style.position = 'relative';
            }
            
            const overlayImg = document.createElement('div');
            overlayImg.style.position = 'absolute';
            overlayImg.style.inset = '0';
            overlayImg.style.backgroundSize = 'cover';
            overlayImg.style.backgroundPosition = 'center';
            overlayImg.style.zIndex = '10';
            overlayImg.style.transition = 'opacity 1s ease-in-out';
            overlayImg.style.backgroundImage = `url('${images[randomImageIndex]}')`;
            overlayImg.style.opacity = '0';
            
            item.appendChild(overlayImg);
            
            // Trigger reflow
            void overlayImg.offsetWidth;
            
            overlayImg.style.opacity = '1';
            
            setTimeout(() => {
                item.style.backgroundImage = overlayImg.style.backgroundImage;
                if (item.contains(overlayImg)) {
                    item.removeChild(overlayImg);
                }
            }, 1000);
        }
    }, 3000);
}

function toggleLanguage(lang) {
    // a. Set direction and lang
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // b. Toggle intro content
    const introEn = document.getElementById('intro-en');
    const introFa = document.getElementById('intro-fa');
    if (lang === 'fa') {
        if (introEn) introEn.classList.add('hidden');
        if (introFa) introFa.classList.remove('hidden');
    } else {
        if (introEn) introEn.classList.remove('hidden');
        if (introFa) introFa.classList.add('hidden');
    }

    // c. Automate translations via DOM Walker
    walkAndTranslate(document.body, lang);

    // d. Reset and replay intro
    clearIntroTimers();
    introStarted = false;
    const overlay = document.getElementById('intro-overlay');
    if (overlay) {
        overlay.classList.remove('intro-phase-1', 'intro-phase-2', 'intro-phase-3', 'intro-fade-out', 'intro-hidden');
    }
    
    document.body.classList.remove('content-visible');
    document.body.setAttribute('data-phase', 'intro');

    // Fix: Wait for layout/RTL repaint before measuring coordinates
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            measureIntroTarget();
            startIntroSequence();
        });
    });
}