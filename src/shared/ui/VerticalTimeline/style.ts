import { cva, RecipeVariantProps, sva } from "@styled-system/css";

export const verticalTimelineRecipe = cva({
    base: {
        padding: 0,
        margin: 0,
        flexDirection: 'column',
        position: 'relative',
        display: 'flex',
        

        _after: {
            display: 'none',
            left: '50%',
            height: 'full',
            transform: 'translateX(-50%)',
            content: '""',
            position: 'absolute',
            top: 0,
            width: '2px',
            backgroundColor: 'sky.500',
            shadow: '0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)',
            shadowColor: 'sky.500',

            sm: {
                display: 'block',
            }
        }
    }
})

export const verticalTimelineItemRecipe = sva({
    className: 'vertical-timeline',
    slots: ['root', 'content', 'title', 'description', 'point'],
    base: {
        root: {
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '4'
        },
        content: {
            position: 'relative',
            colorPalette: 'sky',
            padding: '4',

            sm: {
                width: 'calc(50% - 32px)',
            }
        },
        title: {
            fontWeight: 'bold',
        },
        description: {

        },
        point: {
            display: 'none',

            zIndex: '6',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'sky.500',
            shadow: '0 0 6px var(--shadow-color), inset 0 0 6px var(--shadow-color)',
            shadowColor: 'sky.500',
            backgroundColor: 'var(--bg-color)',
            left: 0,

            sm: {
                display: 'block'
            }
        }
    },
    variants: {
        position: {
            left: {
                point: {
                    left: 'unset',
                    right: '-42px'
                }
            },
            right: {
                content: {
                    sm: {
                        marginLeft: 'calc(50% + 32px)'
                    }
                },
                point: {
                    left: '-42px'
                }
            }
        },
        completed: {
            true: {
                point: {
                    backgroundColor: 'sky.500'
                }
            }
        }
    }
})

export type VerticalTimelineItemVariant = RecipeVariantProps<typeof verticalTimelineItemRecipe>