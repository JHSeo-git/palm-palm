import { styled } from '@/stitches/config'

const Card = styled('div', {
  px: '$4',
  py: '$2',

  defaultVariants: {
    shape: 'smooth',
  },
  variants: {
    variant: {
      full: {
        width: '100%',
      },
    },
    shape: {
      smooth: {
        br: '$4',
      },
      pill: {
        br: '$pill',
      },
    },
    shadow: {
      true: {
        boxShadow: '$muiShadow3',
      },
    },
  },
})

export default Card
