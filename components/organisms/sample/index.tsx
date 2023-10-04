import {SampleMolecule} from "../../molecules/sample";
import useSample from "./useSample";

const SampleOrganism = () => {
	const {name} = useSample();
	return <SampleMolecule name={name} />;
};


export default SampleOrganism;