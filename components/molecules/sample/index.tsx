// componentファイルだけはnamed exportを許容するみたいな運用はありだろうか
export const SampleMolecule = ({name}: {name: string}) => {
	return <div>Hello, {name}!</div>
}
