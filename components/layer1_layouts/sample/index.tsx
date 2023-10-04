import SampleOrganism from "../../organisms/sample";

const SampleLayout = ({id}: {id: number}) => {
	return (
		<div>
			<h1>Sample Layout</h1>
			<h2>content</h2>
			<SampleOrganism id={id}/>
		</div>
	)
}

export default SampleLayout;