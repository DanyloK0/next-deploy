import type { Meta, StoryObj } from '@storybook/react';
import Card from './card';

const meta: Meta<typeof Card> = {
    title: 'Example/Card',
    component: Card,
    }

export default meta;
export const Primary: Story = {
    args: {
        title: 'Tutte le pratiche',
        quantity: 15,
        color:'bg-lime-200',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra rhoncus turpis, ut tristique metus dapibus id.',
        icon:"M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z",
    },
    };
type Story = StoryObj<typeof Card>;