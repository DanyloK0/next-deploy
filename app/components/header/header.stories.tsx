import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';

const meta: Meta<typeof Header> = {
    title: 'Example/Header',
    component: Header,
};

export default meta;

export const LoggedIn: Story = {
    args: {
        name: 'Sydema',
        role: 'Amministratore',
    },
};

export const LoggedOut: Story = {};
type Story = StoryObj<typeof Header>;
