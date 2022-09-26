class UtilClass {
    totalCount(numArr){
        let sum = 0;
        for(let i = 0; i < numArr.length; i ++){
            sum += numArr[i]
        }
        return sum
    }
    printMessages(msgArr){
        for(let eachMessage of msgArr){
            console.log(eachMessage)
        }
    }
}

var messagesPerDay = [5, 8, 6]
var messages = ["Please call back!", "Make sure you install jdk", "Help debug please!"]

var newBot = new UtilClass()

console.log(newBot.totalCount(messagesPerDay))
newBot.printMessages(messages)
