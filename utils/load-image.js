const loadImage = ({ url }) => new Promise((resolve, reject) => {
  const image = new Image()
  image.onload = () => resolve({ url, ratio: image.naturalWidth / image.naturalHeight })
  image.onerror = () => reject()
  image.src = url
})

export { loadImage }
