class Question {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h3');
      }
    
       
      hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
      }
    
      display(){
        var tilte = createElement('h2')
        title.html("My Quiz");
        title.position(130, 0);

        this.question.html("Question: What is last in the rainbow");
        this.question.position(130,80)
        this.option1.html("Letter W");
        this.option1.position(130,100);
        this.option2.html("Pots of gold");
        this.option2.position(130,120);
        this.option3.html("colour")
        this.option3.position(130,140);
      
        this.input.position(130, 160);
        this.button.position(250, 200);
    
    
        //when button is pressed
       this.button.mousePressed(function(){
    
          this.input.hide();
          this.button.hide();
          contestant.name = input.value();
          contestantCount+=1;
         contestant.index=contestantCount;
          contestant.update()
          contestant.updateCount(contestantCount);
         
          this.greeting.html("Hello " + contestant.name )
          this.greeting.position(130, 160)
        });
    
      }
    
}