import { StoryDefault } from "@ladle/react";
import SampleLayout from ".";

export default {
	title: "sample layout",
	meta: {
		key: "value"
	}
} satisfies StoryDefault;

export const sampleLayoutStory = () => <SampleLayout id={1} />;