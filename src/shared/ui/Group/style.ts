import { RecipeVariantProps, sva } from "@styled-system/css";

export const groupRecipe = sva({
    slots: ['root', 'label'],
    base: {
        root: {
            position: 'relative',
            padding: 4,
            borderRadius: 'md',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'colorPalette.600',
            shadow: '0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)',
            shadowColor: 'colorPalette.500'

        },
        label: {
            position: 'absolute',
            left: 2,
            top: -4,
            fontSize: 'sm',
            padding: 1,
            backgroundColor: 'var(--bg-color)',
            color: 'colorPalette.600'
        }
    },
    variants: {
        withLabel: {
            true: {
                root: {}, label: {} 
            }
        },
        variant: {
            blue: {
                root: {
                    colorPalette: 'sky'
                },
                label: {
                    colorPalette: 'sky'
                }
            },
            red: {
                root: {
                    colorPalette: 'red'
                },
                label: {
                    colorPalette: 'red'
                }
            },
            orange: {
                root: {
                    colorPalette: 'orange'
                },
                label: {
                    colorPalette: 'orange'
                }
            },
            green: {
                root: {
                    colorPalette: 'green'
                },
                label: {
                    colorPalette: 'green'
                }
            },
        },
        orientation: {
            vertical: {
                root: {
                    flexDirection: 'column'
                }
            },
            horizontal: {
                root: {
                    flexDirection: 'row'
                }
            }
        }
    },
    compoundVariants: [{
        withLabel: true,
        css: {
            root: {
                paddingTop: 6
            }
        }
    }],
    defaultVariants: {
        variant: 'blue',
        orientation: 'horizontal'
    }
})

export type GroupVariant = RecipeVariantProps<typeof groupRecipe>
