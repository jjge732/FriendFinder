let newSurvey = {
    name: $('#name').val(),
    photo: $('#photo').val(),
    scores: []
};

for (let i = 1; i <= questionNumber; i++) {
    newSurvey.scores.push(parseFloat($(`.surveyQuestion #question${i}`).val()));
};

//fix this
$.post('/api/friends', newSurvey);