const configSettings = (window as any).configSettings
export interface TopArea {
    title: string
    color: string
  }
  
  export const topAreas: TopArea[] = configSettings.topAreas
  
  export const imageList: string[] = configSettings.imageList
  
  export const ratingItems: string[] = configSettings.ratingItems