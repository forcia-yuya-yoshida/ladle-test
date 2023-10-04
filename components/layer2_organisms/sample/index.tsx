import {SampleMolecule} from "../../layer3_molecules/sample";
import useSample from "./useSample";

const SampleOrganism = ({id}: {id: number}) => {
	const {name} = useSample({id});
	return <SampleMolecule name={name} />;
};

export default SampleOrganism;