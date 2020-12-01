class CustomImage {
  constructor(src) {
    this._src = src
  }

  render(container) {
    if (!container) {
      throw new Error('Container is required argument.');
    }

    const img = document.createElement('img');
    img.src = this._src
    container.appendChild(img);
  }
}

export default CustomImage