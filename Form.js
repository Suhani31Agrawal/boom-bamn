class Form{
 constructor(){

 }
 display(){
     var title=createElement("h2")
     title.html("dhoom-5")
     title.position(150,50)

     var input=createInput("name")
     input.position(150,100)

     var button=createButton("turbo")
     button.position(250,150)

     var greeting=createElement("h3")
     button.mousePressed(function(){
         input.hide()
        button.hide()
        var name=input.value()
        playerCount=playerCount+1
        player.update(name)
        player.updateCount(playerCount)

        greeting.html("swag se swagat "+name)
        greeting.position(150,150)
     })
 }
}