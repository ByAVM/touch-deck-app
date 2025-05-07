import { Meta, StoryObj } from "@storybook/react";
import { Toast } from ".";
import { Toaster } from "@ark-ui/react";
import { toaster } from "@features/toaster/model/toaster";

const meta: Meta<typeof Toast> = {
    component: Toast,
    title: 'features/toaster/Toast',
    args: {
        title: 'Some title',
        description: 'Some description'
    },
    decorators: [(Story) => {
        return <>
        <button onClick={() => toaster.create({duration: 20000, closable: true,})}>Create</button>
        <Toaster toaster={toaster} >{(t) => <Story {...t}/>}</Toaster>
        </>
    }]
}

export default meta;

type Story = StoryObj<typeof Toast>

export const Base: Story = {}