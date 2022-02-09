function msgIdIsUnique (msgId: string) {
    for (let value of msgs) {
        if (value[0] == msgId) {
            return false
        }
    }
    return true
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("" + control.deviceSerialNumber() + "_" + msgIdCounter + ":Hello World")
    msgIdCounter += 1
})
radio.onReceivedString(function (receivedString) {
    incomming = receivedString.split(":")
    // if incomming id is unique add it to the messages
    if (msgIdIsUnique(incomming[0])) {
        msgs.push([incomming[0], incomming[1]])
        radio.sendString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (msgs[msgs.length - 1][1]))
})
let incomming: string[] = []
let msgIdCounter = 0
let msgs: string[][] = []
radio.setGroup(1337)
msgs = []
msgIdCounter = 0
basic.forever(function () {
    basic.showNumber(msgs.length)
})
