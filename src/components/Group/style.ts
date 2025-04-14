import { RecipeVariantProps, sva } from "@styled-system/css";

export const groupRecipe = sva({
    slots: ['root', 'label'],
    base: {
        root: {
            position: 'relative',
            padding: 4,
            borderRadius: 'md',
            borderWidth: 2,
            borderStyle: 'solid'
        },
        label: {
            position: 'absolute',
            left: '4px',
            top: -4,
            fontSize: 'sm',
            padding: 1,
            backgroundColor: 'var(--bg-color)'
        }
    },
    variants: {
        withLabel: {
            true: {
                root: {}, label: {} 
            }
        },
        variant: {
            primary: {
                root: {
                    borderColor: 'primary.4'
                },
                label: {
                    color: 'primary.4'
                }
            },
            accent: {
                root: {
                    borderColor: 'accent.4'
                },
                label: {
                    color: 'accent.4'
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
        variant: 'primary'
    }
})

export type GroupVariant = RecipeVariantProps<typeof groupRecipe>
