import Badge from "@/components/Badge/Badge";
import {ComponentProps} from "react";
import {Meta, StoryObj} from "@storybook/nextjs-vite";
import {action} from "storybook/actions";

type StoryProps = ComponentProps<typeof Badge>;

const meta: Meta<StoryProps> = {
    component: Badge,
    argTypes: {
        variant: {
            options: ["light", "dark"],
            control: {
                type: "select",
            }
        }
    },
    args: {
        onClick: action("badge-clicked"),
    }
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
    args: {
        variant: "light",
        size: "medium",
        children: "Light Badge",
    },
    render: (args) => {
        return <Badge {...args} />
    }
}

export const Dark: Story = {
    args: {
        variant: "dark",
        size: "medium",
        children: "Dark Badge"
    },
    render: (args) => {
        return <Badge {...args} />
    }
}