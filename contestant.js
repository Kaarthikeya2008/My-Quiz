class Contestant{
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
      }
    
      getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
          contestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          contestantCount: count
        });
      }
    
      update(){
        var contestantIndex = "player/players" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
     static getContestantInfo(){
       var contestantInfoRef=database.ref('contestant');
       contestantInfoRef.on("value",(data)=>{
         allContestant=data.val();
       })
     }
    
    
}