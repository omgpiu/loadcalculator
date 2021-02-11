type PropsType = {
	description: string
	imgPath: string
	imgName: string
	inputId: string
	inputName: string
}

export const CargoBlock: React.FC<PropsType> = (props) => {
	return <div>

		<p>{props.description}</p>
		<img src={props.imgPath} alt="props.imgName"/>
		<input id={props.inputId} name={props.inputName} type="checkbox"/>
	</div>
}