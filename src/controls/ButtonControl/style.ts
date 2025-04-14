import { RecipeVariantProps, sva } from "@styled-system/css";

export const buttonControlRecipe = sva({
    slots: ['root', 'title', 'help'],

    base: {
        root: {
            display: 'inline-flex',
            flexDirection: 'column',
            flexGrow: '1',
            width: 'full',
            borderStyle: 'solid',
            borderRadius: 'sm',
            borderWidth: '2px',
            paddingY: '2',
            paddingX: '4',
            cursor: 'pointer',
            userSelect: 'none',
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: 'md'
        },
        help: {
            whiteSpace: 'nowrap',
            fontSize: 'xs'
        }
    },
    variants: {
        variant: {
            primary: {
                root: {
                    backgroundColor: "primary.2",
                    borderColor: 'primary.8',
                    color: 'primary.8',

                    _active: {
                        backgroundColor: "primary.4"
                    }
                },
                help: {
                    color: 'primary.5'
                }

            },
            accent: {
                root: {
                    backgroundColor: "accent.2",
                    borderColor: 'accent.8',
                    color: 'accent.8',

                    _active: {
                        backgroundColor: "accent.4"
                    }
                },
                help: {
                    color: 'accent.5'
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
        }
    },
    defaultVariants: {
        direction: 'vertical',
        variant: 'primary'
    }
})

export type ButtonVariant = RecipeVariantProps<typeof buttonControlRecipe>
