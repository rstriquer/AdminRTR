
interface SmallBoxProps {
  id?: string
  value: string | number;
  description: string;
  icon: string;
  target?: string;
  percent?: boolean;
  style?: string;
}

const SmallBox: React.FC<SmallBoxProps> = ({ id, style="info", value, description, icon, target="#", percent }) =>  {
	if (icon) {
		icon = 'ion ' + icon;
	}
  return (
	<div>
	<div id={id} className={`small-box ${'bg-' + style}`}>
		<div className="inner">
			<h3>{value}{percent && <sup style={{ fontSize: 20 }}>%</sup>}</h3>
			<p>{description}</p>
		</div>
		<div className="icon">
			<i className={icon} />
		</div>
		<a href={target} className="small-box-footer">
			More info <i className="fas fa-arrow-circle-right" />
		</a>
	</div>
  
	</div>
  );
}

export default SmallBox