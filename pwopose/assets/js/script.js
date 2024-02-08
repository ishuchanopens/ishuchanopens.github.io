const evilButton = document.getElementById('evil-button')
const notSoEvilButton = document.getElementById('not-so-evil-button')
const text = document.getElementById('text')
const wrapper = document.getElementById('wrapper')
const pwopose = document.getElementById('pwoposePic')
const leftvid = document.getElementById('left-Video')
const rightvid = document.getElementById('right-Video')
// evilButton.style.left = `7%`
// evilButton.style.top = `50%`
const OFFSET = 100

evilButton.addEventListener('click', () => {
  alert('Bwwwehhhhh')
  window.close()
})

notSoEvilButton.addEventListener('click', () => {
    notSoEvilButton.style.display = 'none'
    evilButton.style.display = 'none'
    text.style.display = 'none'
    pwopose.style.display = 'none'
    wrapper.style.display = 'block'
    leftvid.style.display = 'block'
    rightvid.style.display = 'block'

  })
  

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = evilButton.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)
  const horizontalOffset = buttonBox.width / 2 + OFFSET
  const verticalOffset = buttonBox.height / 2 + OFFSET
  if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
    setButtonPosition(
      buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
      buttonBox.y + verticalOffset / verticalDistanceFrom * 10
    )
  }
})

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect()
  const buttonBox = evilButton.getBoundingClientRect()

  if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET
  }
  if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET
  }
  if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET
  }
  if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET
  }

  evilButton.style.left = `${left}px`
  evilButton.style.top = `${top}px`
  evilButton.textContent = "😛NO😛"
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}