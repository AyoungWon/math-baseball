(function(){
    var form = document.querySelector('.answer-wrap');
    var answer = document.querySelector('.answer');
    var result = document.querySelector('.result');

    var num ,numArray,strike,ball,wrong;


    function init(){
        num = [1,2,3,4,5,6,7,8,9];
        numArray = [];
        answer.value='';
        answer.focus();
        strike = 0;
        ball = 0;
        wrong = 0;
    
        for(i = 0; i < 4; i++){
            var numPull = num.splice((Math.floor(Math.random()*9)-i),1)[0];
            numArray.push(numPull);

        }
    }
    init();
    
    
    form.addEventListener('submit' ,function(e){
        e.preventDefault();
        if(String(answer.value) === numArray.join('')){
            //홈런
            result.innerHTML = '홈런';
            init();

        }else {
            //홈런이 아닐때
            wrong++;
            if(wrong = 10){
                result.innerHTML="10 Out! Game over!"
                init();
            } else{
                for(i=0; i<4; i++){
                    if(String(answer.value)[i] === numArray.join('')[i]){
                        //스트라이크
                        strike++;
                    }else if(numArray.indexOf(Number(answer.value[i])) > -1){
                        ball++;
                    }
                }
                //결과 표시
                result.innerHTML = strike + 'strike' + ball + 'ball';
                answer.value='';
                answer.focus();
                strike = 0;
                ball = 0;
             }
           

        }
            


    })









})();