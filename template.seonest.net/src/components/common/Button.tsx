import { styled } from '@/stitches/config'

const Button = styled('button', {
  // rest
  all: 'unset',
  cursor: 'pointer',
  appearance: 'none',
  userSelect: 'none',

  // default
  display: 'inline-flex',
  jc: 'center',
  ai: 'center',
  fontWeight: 'bold',

  border: '1px solid $colors$mauve7',
  bc: '$mauve1',

  // variants
  defaultVariants: {
    shape: 'smooth',
    size: 'base',
    ghost: false,
  },
  variants: {
    variant: {
      grayScale: {
        bc: '$mauve3',
        color: '$mauve11',
        borderColor: '$mauve7',
        '@hover': {
          '&:hover': {
            bc: '$mauve4',
          },
        },
        '&:active': {
          bc: '$mauve5',
        },
        '&:focus, &:focus-visible': {
          borderColor: '$mauve7',
        },
      },
      redScale: {
        bc: '$red3',
        color: '$red11',
        borderColor: '$red7',
        '@hover': {
          '&:hover': {
            bc: '$red4',
          },
        },
        '&:active': {
          bc: '$red5',
        },
        '&:focus, &:focus-visible': {
          borderColor: '$red7',
        },
      },
      blueScale: {
        bc: '$blue3',
        color: '$blue11',
        borderColor: '$blue7',
        '@hover': {
          '&:hover': {
            bc: '$blue4',
          },
        },
        '&:active': {
          bc: '$blue5',
        },
        '&:focus, &:focus-visible': {
          borderColor: '$blue7',
        },
      },
      greenScale: {
        bc: '$green3',
        color: '$green11',
        borderColor: '$green7',
        '@hover': {
          '&:hover': {
            bc: '$green4',
          },
        },
        '&:active': {
          bc: '$green5',
        },
        '&:focus, &:focus-visible': {
          borderColor: '$green7',
        },
      },
    },
    shape: {
      solid: {
        br: 0,
      },
      smooth: {
        br: '$2',
      },
      round: {
        br: '$round',
      },
      pill: {
        br: '$pill',
      },
    },
    size: {
      small: {
        p: '$1',
        fontSize: '$small',
      },
      base: {
        px: '$2',
        py: '$2',
        fontSize: '$base',
      },
      large: {
        py: '$3',
        fontSize: '$large',
      },
    },
    ghost: {
      true: {
        bc: 'transparent',
        borderColor: 'transparent',
      },
    },
  },
})

export default Button
