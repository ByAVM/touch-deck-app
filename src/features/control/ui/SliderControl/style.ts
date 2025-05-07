import { sliderAnatomy } from "@ark-ui/react";
import { RecipeVariantProps, sva } from "@styled-system/css";

export const sliderControlRecipe = sva({
    className: 'slider-control',
    slots: sliderAnatomy.keys(),
    base: {
        root: {
            position: 'relative',
            padding: 4
        },
        thumb: {
            borderRadius: 'sm',
            backgroundColor: 'colorPalette.500',
            shadow: '0 0 6px var(--shadow-color)',
            shadowColor: 'colorPalette.500',
        },
        range: {
            backgroundColor: 'colorPalette.600'
        },
        track: {
            backgroundColor: 'colorPalette.800/40'
        },
        label: {
            position: 'absolute',
            fontSize: 'sm',
            whiteSpace: 'nowrap',
            color: 'colorPalette.600'
        }
    },
    variants: {
        orientation: {
            horizontal: {
                thumb: {
                    height: 8,
                    width: 6,
                    top: -3
                },
                root: {
                    paddingTop: 6,
                    width: '250px',
                },
                track: {
                    height: 2
                },
                range: {
                    height: 'full'
                },
                label: {
                    top: -2
                }
            },
            vertical: {
                thumb: {
                    height: 6,
                    width: 8,
                    left: -3
                },
                root: {
                    height: '200px',
                    paddingLeft: 6,
                    paddingBottom: 0,
                    paddingTop: 0
                },
                track: {
                    width: 2,
                    height: 'full'
                },
                control: {
                    height: 'full'
                },
                range: {
                    width: 'full'
                },
                label: {
                    writingMode: 'sideways-lr',
                    left: -2,
                    bottom: 0,
                }
            }
        },
        variant: {
            blue: {
                thumb: {
                    colorPalette: 'sky',
                },
                track: {
                    colorPalette: 'sky'
                },
                range: {
                    colorPalette: 'sky'
                },
                label: {
                    colorPalette: 'sky'
                }
            },
            red: {
                thumb: {
                    colorPalette: 'red',
                },
                track: {
                    colorPalette: 'red'
                },
                range: {
                    colorPalette: 'red'
                },
                label: {
                    colorPalette: 'red'
                }
            },
            orange: {
                thumb: {
                    colorPalette: 'orange',
                },
                track: {
                    colorPalette: 'orange'
                },
                range: {
                    colorPalette: 'orange'
                },
                label: {
                    colorPalette: 'orange'
                }
            },
            green: {
                thumb: {
                    colorPalette: 'green',
                },
                track: {
                    colorPalette: 'green'
                },
                range: {
                    colorPalette: 'green'
                },
                label: {
                    colorPalette: 'green'
                }
            }
        }
    },
    defaultVariants: {
        orientation: 'horizontal',
        variant: 'blue'
    }
})

export type SliderVariant = RecipeVariantProps<typeof sliderControlRecipe>