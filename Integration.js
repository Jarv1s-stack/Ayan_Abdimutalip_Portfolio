const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Собираем данные формы
        const formData = {
            name: this.querySelector('input[name="name"]').value,
            phone: this.querySelector('input[name="phone"]').value || 'Not provided',
            email: this.querySelector('input[name="email"]').value,
            telegram: this.querySelector('input[name="telegram"]').value || 'Not provided',
            subject: this.querySelector('input[name="subject"]').value,
            message: this.querySelector('textarea[name="message"]').value
        };

        // Формируем сообщение для Telegram
        const message = `New Client Inquiry:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nTelegram: ${formData.telegram}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

        // Настройки Telegram Bot API
        const BOT_TOKEN = '8156472399:AAE8bC_yX9JcylpFD7wMXKPWo_5gLhElIXE'; // Замените на ваш BOT_TOKEN
        const CHAT_ID = '6768870909'; // Замените на ваш CHAT_ID
        const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        // Отправляем данные в Telegram
        fetch(TELEGRAM_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown' // Опционально: форматирование сообщения
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Thank you for your message! I will contact you soon.');
                contactForm.reset();
            } else {
                console.error('Failed to send message:', data.description);
                alert('Failed to send message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
}