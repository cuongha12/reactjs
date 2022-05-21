import React from 'react';
import {useCountdown} from "../hooks/useCountdown";
import '../css/detail.css'
const CountdownTimer = ({targetDate}) => {


	const [days, hours, minutes, seconds] = useCountdown(targetDate);

	return (
		<div className={'ShowCounterr'}>
			<table border={'1px'}>
				<tbody>
				<tr>
					<td>
						<p  style={{color: 'black'}} className={'down'}>{days}</p>
						<p  style={{color: '#2e6ed5'}} className={'countd'}>Days</p>
					</td>
				</tr>

				<tr>
					<td>
						<p  style={{color: 'black'}} className={'down'}>{hours}</p>
						<p  style={{color: '#2e6ed5'}} className={'countd'}>Hours</p>
					</td>
				</tr>
				<tr>
					<td>
						<p  style={{color: 'black'}} className={'down'}>{minutes}</p>
						<p  style={{color: '#2e6ed5'}} className={'countd'}>Min</p>
					</td>
				</tr>
				<tr>
					<td>
						<p  style={{color: 'black'}} className={'down'}>{seconds}</p>
						<p  style={{color: '#2e6ed5'}} className={'countd'}>Secs</p>
					</td>
				</tr>
				</tbody>

			</table>



		</div>
	);
};

export default CountdownTimer;