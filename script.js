document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu
            document.querySelector('nav').classList.remove('active');
            document.querySelector('.mobile-menu-btn').innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Sticky header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        const isActive = nav.classList.contains('active');
        mobileMenuBtn.innerHTML = `<i class="fas fa-${isActive ? 'times' : 'bars'}"></i>`;
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    themeToggle.addEventListener('click', function() {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    function updateThemeIcon(theme) {
        themeToggle.innerHTML = `<i class="fas fa-${theme === 'light' ? 'moon' : 'sun'}"></i>`;
    }

    // Language toggle
    const translations = {
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_resume: 'Resume',
            nav_skills: 'Skills',
            nav_contact: 'Contact',
            welcome_hello: 'Hello!',
            welcome_title: 'I\'m Abdimutalip Ayan',
            welcome_subtitle: 'Frontend & ChatBot Developer',
            welcome_contact: 'Contact Me',
            about_title: 'About me',
            about_content: 'I am a front-end developer who creates websites quickly and efficiently. Passionate about building interactive and user-friendly web applications.',
            about_fullname: 'Fullname:',
            about_dob: 'Date of birth:',
            about_address: 'Address:',
            about_telegram: 'Telegram',
            about_stats: 'Projects complete',
            about_download_cv: 'Download CV',
            about_my_projects: 'My Projects',
            skills_title: 'My Skills',
            skills_desc: 'I have expertise in various web technologies and frameworks that help me build modern web applications.',
            resume_title: 'My Resume',
            resume_desc: 'My education and professional experience',
            resume_education: 'Education',
            resume_certificates: 'Certificates',
            resume_skills: 'Skills',
            resume_professional: 'Professional Certificate',
            contact_title: 'Get In Touch',
            contact_desc: 'Feel free to reach out to me for any questions or opportunities.',
            contact_location: 'Location:',
            contact_email: 'Email:',
            contact_phone: 'Phone:',
            contact_form_name: 'Your Name',
            contact_form_phone: 'Your Phone',
            contact_form_email: 'Your Email',
            contact_form_telegram: 'Telegram username (optional)',
            contact_form_subject: 'Subject',
            contact_form_message: 'Your Message',
            contact_form_submit: 'Send Message',
            footer_role: 'Frontend & ChatBot Developer',
            footer_copyright: '© 2023 Abdimutalip Ayan. All rights reserved.'
        },
        ru: {
            nav_home: 'Главная',
            nav_about: 'Обо мне',
            nav_resume: 'Резюме',
            nav_skills: 'Навыки',
            nav_contact: 'Контакты',
            welcome_hello: 'Привет!',
            welcome_title: 'Я Абдимуталип Аян',
            welcome_subtitle: 'Фронтенд и чат-бот разработчик',
            welcome_contact: 'Связаться со мной',
            about_title: 'Обо мне',
            about_content: 'Я фронтенд-разработчик, создающий веб-сайты быстро и эффективно. Увлечен созданием интерактивных и удобных веб-приложений.',
            about_fullname: 'Полное имя:',
            about_dob: 'Дата рождения:',
            about_address: 'Адрес:',
            about_telegram: 'Телеграм',
            about_stats: 'Завершено проектов',
            about_download_cv: 'Скачать резюме',
            about_my_projects: 'Мои проекты',
            skills_title: 'Мои навыки',
            skills_desc: 'У меня есть опыт работы с различными веб-технологиями и фреймворками, которые помогают мне создавать современные веб-приложения.',
            resume_title: 'Мое резюме',
            resume_desc: 'Мое образование и профессиональный опыт',
            resume_education: 'Образование',
            resume_certificates: 'Сертификаты',
            resume_skills: 'Навыки',
            resume_professional: 'Профессиональный сертификат',
            contact_title: 'Связаться со мной',
            contact_desc: 'Не стесняйтесь обращаться ко мне с любыми вопросами или предложениями.',
            contact_location: 'Местоположение:',
            contact_email: 'Электронная почта:',
            contact_phone: 'Телефон:',
            contact_form_name: 'Ваше имя',
            contact_form_phone: 'Ваш телефон',
            contact_form_email: 'Ваш email',
            contact_form_telegram: 'Имя пользователя в Telegram (необязательно)',
            contact_form_subject: 'Тема',
            contact_form_message: 'Ваше сообщение',
            contact_form_submit: 'Отправить сообщение',
            footer_role: 'Фронтенд и чат-бот разработчик',
            footer_copyright: '© 2023 Абдимуталип Аян. Все права защищены.'
        }
    };

    const langToggle = document.querySelector('.lang-toggle');
    const currentLang = localStorage.getItem('lang') || 'en';
    langToggle.value = currentLang;
    applyTranslations(currentLang);
    langToggle.addEventListener('change', function() {
        const newLang = this.value;
        localStorage.setItem('lang', newLang);
        applyTranslations(newLang);
    });

    function applyTranslations(lang) {
        const t = translations[lang];
        document.querySelector('nav a[href="#home"]').textContent = t.nav_home;
        document.querySelector('nav a[href="#about"]').textContent = t.nav_about;
        document.querySelector('nav a[href="#resume"]').textContent = t.nav_resume;
        document.querySelector('nav a[href="#skills"]').textContent = t.nav_skills;
        document.querySelector('nav a[href="#contact"]').textContent = t.nav_contact;
        document.querySelector('.welcome .content p').textContent = t.welcome_hello;
        document.querySelector('.welcome .content h1').textContent = t.welcome_title;
        document.querySelector('.welcome .content h2').textContent = t.welcome_subtitle;
        
        const contactButton = document.querySelector('.welcome .btn:not(.outline)');
        if (contactButton) {
            contactButton.textContent = t.welcome_contact;
        } else {
            console.warn('Contact Button (.welcome .btn:not(.outline)) not found in DOM');
        }
        
        document.querySelector('.about-content .frontSide-about').textContent = t.about_title;
        document.querySelector('.about-content .content').textContent = t.about_content;
        
        const leftSideHeaders = document.querySelectorAll('.left-side h3');
        if (leftSideHeaders[0]) leftSideHeaders[0].textContent = t.about_fullname;
        else console.warn('Left Side Header [0] (.left-side h3) not found in DOM');
        if (leftSideHeaders[1]) leftSideHeaders[1].textContent = t.about_dob;
        else console.warn('Left Side Header [1] (.left-side h3) not found in DOM');
        if (leftSideHeaders[2]) leftSideHeaders[2].textContent = t.about_address;
        else console.warn('Left Side Header [2] (.left-side h3) not found in DOM');
        if (leftSideHeaders[3]) leftSideHeaders[3].textContent = t.about_telegram;
        else console.warn('Left Side Header [3] (.left-side h3) not found in DOM');
        
        document.querySelector('.stat-item .label').textContent = t.about_stats;
        document.querySelector('.checkProjects').textContent = t.about_download_cv;
        document.querySelector('.checkCertificate').textContent = t.about_my_projects;
        document.querySelector('.skills-section .front-title').textContent = t.skills_title;
        document.querySelector('.skills-section .section-header p').textContent = t.skills_desc;
        document.querySelector('.resume-section .front-title').textContent = t.resume_title;
        document.querySelector('.resume-section .section-header p').textContent = t.resume_desc;
        document.querySelectorAll('.resume-column h3')[0].textContent = t.resume_education;
        document.querySelectorAll('.resume-column h3')[1].textContent = t.resume_certificates;
        document.querySelectorAll('.resume-column h3')[2].textContent = t.resume_skills;
        // document.querySelectorAll('.resume-column h3')[3].textContent = t.resume_professional;
        document.querySelector('.contact-section .front-title').textContent = t.contact_title;
        document.querySelector('.contact-section .section-header p').textContent = t.contact_desc;
        document.querySelectorAll('.info-item h3')[0].textContent = t.contact_location;
        document.querySelectorAll('.info-item h3')[1].textContent = t.contact_email;
        document.querySelectorAll('.info-item h3')[2].textContent = t.contact_phone;
        document.querySelector('.contact-form input[placeholder="Your Name"]').placeholder = t.contact_form_name;
        document.querySelector('.contact-form input[placeholder="Your Phone"]').placeholder = t.contact_form_phone;
        document.querySelector('.contact-form input[placeholder="Your Email"]').placeholder = t.contact_form_email;
        document.querySelector('.contact-form input[placeholder="Telegram username (optional)"]').placeholder = t.contact_form_telegram;
        document.querySelector('.contact-form input[placeholder="Subject"]').placeholder = t.contact_form_subject;
        document.querySelector('.contact-form textarea').placeholder = t.contact_form_message;
        document.querySelector('.contact-form .submit-btn').textContent = t.contact_form_submit;
        document.querySelector('.footer-content p').textContent = t.footer_role;
        document.querySelector('.copyright p').textContent = t.footer_copyright;
    }

    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-item, .certificate-card, .info-item');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    document.querySelectorAll('.skill-item, .certificate-card, .info-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Skill progress animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        const progress = item.querySelector('.progress');
        const width = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = width;
        }, 300);
    });

    // Certificate Modal
    const certificateData = {
        'Advanced-React': {
            image: 'Advanced-React.png'
        },
        'Front-End-Developer-Capstone': {
            image: 'Front-End-Developer-Capstone.png'
        },
        'Coding-Interview-Preparation': {
            image: 'Coding-Interview-Preparation.png'
        },
        'HTML-and-CSS-in-depth': {
            image: 'HTML-and-CSS-in-depth.png'
        },
        'Introduction-to-Front-End-Development': {
            image: 'Introduction-to-Front-End-Development.png'
        },
        'Version-Control': {
            image: 'Version-Control.png'
        },
        'Principles-of-UX-UI-Design': {
            image: 'Principles-of-UX-UI-Design.png'
        },
        'Programming-with-JavaScript': {
            image: 'Programming-with-JavaScript.png'
        },
        'React-Basics': {
            image: 'React-Basics.png'
        },
        'Meta-Front-End-Developer': {
            image: 'Meta-Front-End-Developer.png'
        }
    };

    // Ensure openModal is globally accessible
    window.openModal = function(certName) {
        console.log('openModal called with:', certName);
        const modal = document.getElementById('certificateModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalImage = document.getElementById('modalImage');
        
        if (!modal || !modalTitle || !modalImage) {
            console.error('Modal elements not found:', {
                modal: !!modal,
                modalTitle: !!modalTitle,
                modalImage: !!modalImage
            });
            alert('Error: Modal components missing.');
            return;
        }

        const cert = certificateData[certName];
        if (cert) {
            modalTitle.textContent = certName.replace(/-/g, ' ');
            modalImage.setAttribute('loading', 'true');
            modalImage.src = cert.image;

            console.log('Attempting to load image:', cert.image);
            modalImage.onerror = function() {
                modalImage.alt = 'Certificate image not found';
                modalImage.removeAttribute('loading');
            };
            modalImage.onload = function() {
                console.log('Image loaded successfully:', cert.image);
                modalImage.removeAttribute('loading');
                const existingError = modalImage.parentElement.querySelector('p');
                if (existingError) existingError.remove();
            };

            modal.style.display = 'block';
        } else {
            console.error('Certificate not found in certificateData:', certName);
            alert('Certificate not found: ' + certName);
        }
    };

    window.closeModal = function() {
        const modal = document.getElementById('certificateModal');
        if (modal) {
            modal.style.display = 'none';
            const modalImage = document.getElementById('modalImage');
            if (modalImage) {
                modalImage.src = '';
                modalImage.alt = 'Certificate Image';
            }
            const errorMessage = modalImage.parentElement.querySelector('p');
            if (errorMessage) errorMessage.remove();
        } else {
            console.error('Modal element not found');
        }
    };

    window.onclick = function(event) {
        const modal = document.getElementById('certificateModal');
        if (event.target === modal) {
            window.closeModal();
        }
    };

    document.querySelectorAll('.certificate-card, .professional-cert').forEach(card => {
        card.addEventListener('click', function() {
            const certName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            console.log('Certificate card clicked:', certName);
            window.openModal(certName);
        });
    });
});
