import {Story, StoryDefault} from "@ladle/react"
import {Sample} from "."

export default {
	title: "sample",
	meta: {
		key: "value"
	}
} satisfies StoryDefault;

export const SampleStory = () => <Sample name="waiyade" />;

export const SampleStory2 = () => "uouo";

export const SampleStory3:Story = () => "ieie";
SampleStory3.storyName = "namae karerareruyo"