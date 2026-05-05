const nameEl = document.querySelector('.name')
const speed = 230
const icons = document.querySelector('.main ul')
const sideInfo = document.querySelector('.side-info')
const mainDiv = document.querySelector('.main')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function replaceHTMLWithLatency(html) {
    nameEl.innerHTML = html
    await sleep(speed)
}

async function animate() {
    await sleep(speed * 4)
    await replaceHTMLWithLatency('<u>v</u>erhovv')
    await replaceHTMLWithLatency('<u>V</u>erhovv')
    await replaceHTMLWithLatency('V<u>e</u>rhovv')
    await replaceHTMLWithLatency('Ve<u>r</u>hovv')
    await replaceHTMLWithLatency('Ver<u>h</u>ovv')
    await replaceHTMLWithLatency('Verh<u>o</u>vv')
    await replaceHTMLWithLatency('Verho<u>v</u>v')
    await replaceHTMLWithLatency('Verhov<u>v</u>')
    await replaceHTMLWithLatency('Verhov <u>v</u>')
    await replaceHTMLWithLatency('Verhov <u>V</u>')
    await replaceHTMLWithLatency('Verhov V<u>l</u>')
    await replaceHTMLWithLatency('Verhov Vl<u>a</u>')
    await replaceHTMLWithLatency('Verhov Vla<u>d</u>')
    await replaceHTMLWithLatency('Verhov Vlad<u>i</u>')
    await replaceHTMLWithLatency('Verhov Vladi<u>m</u>')
    await replaceHTMLWithLatency('Verhov Vladim<u>i</u>')
    await replaceHTMLWithLatency('Verhov Vladimi<u>r</u>')
    await replaceHTMLWithLatency('Verhov Vladimir')
    await replaceHTMLWithLatency('Verhov Vladimi<u>r</u>')
    await replaceHTMLWithLatency('Verhov Vladimir')

    mainDiv.classList.add('fade-in')
    await sleep(speed * 2)
    icons.classList.add('fade-in')
    await sleep(speed * 2)
    sideInfo.classList.add('fade-in')
}

animate()
