export interface IStoryAsset {
  id: number
  alt: string
  name: string
  focus: null
  title: string
  filename: string
  copyright: string
  fieldtype: string
}

export interface IStoryLink {
  id: string
  url: string
  linktype: string
  fieldtype: string
  cached_url: string
}
