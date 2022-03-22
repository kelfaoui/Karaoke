


let player = document.querySelector('.player')
let lyrics = document.querySelector('.lyrics')
let lines = lyrics.textContent.trim().split('\n')

lyrics.removeAttribute('style')
lyrics.innerText = ''

let syncData = []

lines.map((line, index) => {
let [time, text] = line.trim().split('|')
syncData.push({'start': time.trim(), 'text': text.trim()})
console.log('syncData')
console.log(syncData)
console.log('line')
console.log(line)
})

player.addEventListener('timeupdate', () => {
syncData.forEach((item) => {
console.log(item)
if (player.currentTime >= item.start) lyrics.innerText = item.text
    })
})

