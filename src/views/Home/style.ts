import { sva } from "@styled-system/css";

export const homePageRecipe = sva({
    className: 'home',
    slots: ['root', 'action', 'title', 'subtitle'],
    base: {
        root: {
            height: 'full'
        },
        title: {
            fontSize: '7xl',
            lineHeight: "tight",
            textTransform: 'uppercase',
            fontFamily: 'mono',
            color: 'cyan.300',
            textShadowColor: 'cyan.200',
            textShadow: 'md',
        },
        subtitle: {
            fontSize: '2xl',
            color: 'cyan.300/50',
            fontWeight: 'light'
        },
        action: {
            backgroundColor: 'transparent',
            borderColor: 'cyan.100',
            borderWidth: '2px',
            borderRadius: 'sm',
            px: 10,
            py: 2,
            textTransform: 'uppercase',
            fontSize: '2xl',
            color: 'cyan.300',

            _hover: {
                backgroundColor: 'cyan.100/40'
            }
        }
    },
    variants: {
        size: {
            xs: {

            },
            sm: {},

            md: {
                
            },
        }
    },
    defaultVariants: {
        size: 'xs'
    }
})