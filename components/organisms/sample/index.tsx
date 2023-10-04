import { SampleMolecule } from "../../molecules/sample";
import useSample from "./useSample";

export const SampleOrganism = () => {
	const {name} = useSample();
	return <SampleMolecule name={name} />;
};
