import { sliderAnatomy } from "@ark-ui/react";
import { sva } from "@styled-system/css";

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
        },
        range: {},
        track: {},
        label: {
            position: 'absolute',
            fontSize: 'sm',
            whiteSpace: 'nowrap'
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
            primary: {
                thumb: {
                    backgroundColor: 'primary.10'
                },
                track: {
                    backgroundColor: 'primary.2'
                },
                range: {
                    backgroundColor: 'primary.7'
                },
                label: {
                    color: 'primary.4'
                }
            }
        }
    },
    defaultVariants: {
        orientation: 'horizontal',
        variant: 'primary'
    }
})