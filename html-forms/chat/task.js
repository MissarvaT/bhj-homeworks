const chatWidget = document.querySelector('.chat-widget');
const messageInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const messagesContainer = document.querySelector( '.chat-widget__messages-container' );

const answers = [
    'Ты кто такой?!',
    'До свидания!',
    'Мы закрыты. Перезвоните через 10 лет',
    'Привет! Ты че офигел?',
    'Хо-хо',
    'Вам наш продукт уже не поможет',
    'Что надо?',
    'И что с того?',
    'Сам-то докажи что ты не робот и трезвый',
    'А, опять ты здесь, раб кредитный',
    'Меня это не интересует'
  ];

randomAnswer = (answers) => {
    index = Math.floor(Math.random() * answers.length);
    return answers[index];
};

chatWidget.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
});

messageInput.addEventListener('keydown', event => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (event.code === 'Enter') {
        const message = messageInput.value;
        if (message.length >= 1) {
            messages.innerHTML += `
            <div class="message message_client">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
            ${message}
            </div>
            </div>
            <div class="message">
            <div class="message__time">${hours}:${minutes}</div>
            <div class="message__text">
            ${randomAnswer(answers)}
            </div>
            </div>
             `;
             messageInput.value = '';
            };
        };
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
);
