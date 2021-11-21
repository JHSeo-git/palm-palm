import { styled } from '@/stitches/config'

const Container = styled('div', {
  maxWidth: '$maxWidth',
  m: '0 auto',

  variants: {
    fullWidth: {
      true: {
        maxWidth: '100%',
      },
    },
  },
})

export default Container
