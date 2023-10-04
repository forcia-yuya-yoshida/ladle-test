import {Story, StoryDefault} from "@ladle/react"
import {SampleMolecule} from "."

export default {
	title: "sample",
	meta: {
		key: "value"
	}
} satisfies StoryDefault;

export const SampleStory = () => <SampleMolecule name="waiyade" />;

export const SampleStory2 = () => "uouo";

export const SampleStory3: Story = () => "ieie";
SampleStory3.storyName = "namae karerareruyo"