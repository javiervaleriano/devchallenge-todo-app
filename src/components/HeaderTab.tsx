import { IHeaderTabProps } from "../utils/interfaces";

const HeaderTab = ({
	currIndex,
	assignedIndex,
	text,
	className,
	setIndexTab,
}: IHeaderTabProps): JSX.Element => (
	<li
		className={`tab tab-${className} ${
			currIndex === assignedIndex ? "tab-active" : undefined
		}`}
		onClick={() => setIndexTab(assignedIndex)}
	>
		{text}
		<span
			className={currIndex === assignedIndex ? "visible" : undefined}
		></span>
	</li>
);

export default HeaderTab;
