import { RecipeVariantProps, sva } from "@styled-system/css";

export const buttonControlRecipe = sva({
    slots: ['root', 'title', 'help'],

    base: {
        root: {
            display: 'inline-flex',
            flexDirection: 'column',
            borderStyle: 'solid',
            borderRadius: 'sm',
            borderWidth: '2px',
            paddingY: '2',
            paddingX: '4',
            cursor: 'pointer',
            userSelect: 'none',
            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: "colorPalette.800/20",
            borderColor: 'colorPalette.500',
            color: 'colorPalette.500',
            shadow: '0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)',
            shadowColor: 'colorPalette.500',

            _active: {
                backgroundColor: "colorPalette.800/40"
            }
        },
        title: {
            fontSize: 'md'
        },
        help: {
            whiteSpace: 'nowrap',
            fontSize: 'xs',

            color: 'colorPalette.700'
        }
    },
    variants: {
        variant: {
            blue: {
                root: {
                    colorPalette: 'sky'
                },
                help: {
                    colorPalette: 'sky'
                }
            },
            red: {
                root: {
                    colorPalette: 'red'
                },
                help: {
                    colorPalette: 'red'
                }
            },
            orange: {
                root: {
                    colorPalette: 'orange'
                },
                help: {
                    colorPalette: 'orange'
                }
            },
            green: {
                root: {
                    colorPalette: 'green'
                },
                help: {
                    colorPalette: 'green'
                }
            }
        },
        direction: {
            horizontal: {
                root: {flexDirection: 'row'}
            },
            vertical: {
                root : {flexDirection: 'column'}
            }
        },
        fullWidth: {
            true: {
                root: {
                    width: '100%'
                }
            }
        }
    },
    defaultVariants: {
        direction: 'vertical',
        variant: 'blue'
    }
})

export type ButtonVariant = RecipeVariantProps<typeof buttonControlRecipe>
