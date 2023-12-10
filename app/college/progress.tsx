// Nothing to see here, just template code modified for my needs 
"use client";

import { Timeline, Text } from "@mantine/core";

export function College({ active }: { active: number }) {
  return (
    <>
      <Timeline active={active} bulletSize={24} lineWidth={2}>
        <Timeline.Item
          // bullet={<IconGitBranch size={12} />}
          title="CommonApp"
        >
          <Text c="dimmed" size="sm">
            Added college in CommonApp
          </Text>
        </Timeline.Item>

        <Timeline.Item
          // bullet={<IconGitCommit size={12} />}
          title="Completed writing prompts"
        >
          <Text c="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Reviewed application"
          //   bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            Application information reviewed for correctness
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Submitted application">
          <Text c="dimmed" size="sm">
            CommonApp application was submitted
          </Text>
        </Timeline.Item>
        <Timeline.Item title="Application status">
          <Text c="dimmed" size="sm">
            Applied - waiting
          </Text>
        </Timeline.Item>
      </Timeline>
    </>
  );
}
