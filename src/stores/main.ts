import { defineStore } from 'pinia'

const STORAGE_KEY = 'image-rank-data'

export interface ImageState {
  x: number
  y: number
  ratings: Record<string, number>
}

export interface RootState {
  images: Record<string, ImageState>
}

export const useMainStore = defineStore('main', {
  state: (): RootState => ({
    images: {}
  }),

  actions: {
    init(imageList: string[]) {
      const cache = localStorage.getItem(STORAGE_KEY)

      if (cache) {
        this.images = JSON.parse(cache)
      } else {
        imageList.forEach(name => {
          this.images[name] = {
            x: 0,
            y: 0,
            ratings: {}
          }
        })
        this.save()
      }
    },

    updatePosition(name: string, x: number, y: number) {
      if (!this.images[name]) {
        this.images[name] = {
          x: 0,
          y: 0,
          ratings: {}
        }
      }
    
      this.images[name].x = x
      this.images[name].y = y
      this.save()
    },

    updateRating(name: string, key: string, value: number) {
      if (!this.images[name]) {
        this.images[name] = {
          x: 0,
          y: 0,
          ratings: {}
        }
      }

      this.images[name].ratings[key] = value
      this.save()
    },

    save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.images))
    },

    reset(imageList: string[]) {
      localStorage.removeItem(STORAGE_KEY)
      this.images = {}
      this.init(imageList)
    }
  }
})