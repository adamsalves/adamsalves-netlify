import Typography from 'typography'
import lawtonTheme from 'typography-theme-lawton'
import gray from 'gray-percentage'

lawtonTheme.headerFontFamily = ['Libre Franklin', 'sans-serif']
lawtonTheme.bodyFontFamily = ['Open Sans', 'sans-serif']
lawtonTheme.googleFonts = [
  {
    name: 'Libre Franklin',
    styles: [
      '400',
      '700'
    ]
  },
  {
    name: 'Open Sans',
    styles: [
      '400',
      '700'
    ]
  }
]

lawtonTheme.overrideStyles = ({ rhythm }, options, styles) => ({
  a: {
    fontWeight: 'bold',
    color: '#000',
    textDecoration: 'none',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
  blockquote: {
    color: gray(26.6),
    borderLeft: '4px solid #999',
    paddingLeft: rhythm(.5),
    marginLeft: rhythm(.5),
    marginRight: rhythm(.5),
    marginTop: rhythm(.5),
    marginBottom: rhythm(.5),
  },
}) 

const typography = new Typography(lawtonTheme)


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
