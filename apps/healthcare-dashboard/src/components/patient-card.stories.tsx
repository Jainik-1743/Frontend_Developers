import type { Meta, StoryObj } from "@storybook/react";

import { PatientCard } from "./patient-card";

const meta: Meta<typeof PatientCard> = {
  title: "Healthcare/PatientCard",
  component: PatientCard,
};

export default meta;

type Story = StoryObj<typeof PatientCard>;

export const Default: Story = {
  args: {
    name: "Amelia Carter",
    condition: "Post-surgical recovery",
    riskLevel: "Moderate",
    room: "A-204",
  },
};
