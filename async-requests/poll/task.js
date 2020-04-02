'use strict'

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readystatechange', function () {
    if (this.readyState == xhr.DONE && this.status == 200) {

        let data = JSON.parse(this.responseText);
        console.log(data);

        let pollTitle = document.querySelector('.poll__title');
        pollTitle.innerText = data.data.title;
        let answers = data.data.answers;
        let answersPoll = document.querySelector('.poll__answers');

        for (let i = 0; i < answers.length; i++) {
            let answer = document.createElement('div');
            answersPoll.appendChild(answer);
            answer.outerHTML = `<button class="poll__answer">
            ${answers[i]}</button>`
        };
        let buttons = Array.from(document.querySelectorAll('.poll__answer'));
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = () => {
                alert('Спасибо! Ваш голос засчитан!');

                //доп. задача
                let pollId = data.id;
                let answerId = buttons.indexOf(buttons[i]);
                let xhr2 = new XMLHttpRequest();
                xhr2.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
                xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhr2.send( `vote=${pollId}&answer=${answerId}` );
                xhr2.addEventListener('readystatechange', function () {
                    if (this.readyState == xhr2.DONE && this.status == 200) {
                
                        let votesData = JSON.parse(this.responseText);
                        let totalVotes = 0;
                        for (let j = 0; j < votesData.stat.length; j++) {
                            totalVotes += votesData.stat[j].votes;
                        };

                        answersPoll.remove();
                        let percentAnswers = document.createElement('div');
                        document.querySelector('.poll').appendChild(percentAnswers);

                        for (let l = 0; l < votesData.stat.length; l++) {
                            let percentage = votesData.stat[l].votes * 100 / totalVotes;
                            percentage = percentage.toFixed(2);
                            let answer = document.createElement('div');
                            percentAnswers.appendChild(answer);
                            answer.outerHTML = `<div class="answer">
                            <div class="answer_text">${votesData.stat[l].answer}:</div>
                            <div class="answer_percent">${percentage}%</div>
                        </div>`
                        };
                    }
                })
            }
        }
    };
});
xhr.send();


