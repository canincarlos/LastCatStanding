import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 1,
    images: [],
    winners: [],
    challenger_1: '',
    challenger_2: ''
  }),
  actions: {
    async getIMGs() {
      const api =
        "https://photo-voting.hiring.ipums.org/images/";
      const result = await fetch(api);
      const data = await result.json();
      this.images = data.data;
      this.setImages()
    },
    setImages () {
      this.challenger_1 = this.images[0]
      this.challenger_2 = this.images[1]
    },
    roundChange() {
      this.images = this.winners
      this.winners = []
      this.setImages()
    },
    chosen(img) {
      this.winners.push(img)
      if (this.images.length === 2 && this.winners.length === 1) {
        this.images = [], this.winners = [], this.challenger_1 = img, this.challenger_2 = '', this.counter = 0
      } else if (this.images.length === 2) {
        this.counter++
        this.roundChange()
      } else {
        this.images.splice(0, 2);
        this.setImages()
      }
    }
  }
})
