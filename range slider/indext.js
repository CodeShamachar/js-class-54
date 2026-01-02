let range = document.getElementById('range')
let label = document.getElementById('label')

range.addEventListener('input', () => {
    let value = range.value
    let max = range.max

    let percent = (value / max) * 100
    
    label.style.left = percent + '%'
    label.innerText = value
})