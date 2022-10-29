import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = props => {
    const stats = Object.entries(props);

    return !props.total ? (<p className={css.text }>There is no feedback</p>) : 
        (
            <ul className={css.text }>
                {stats.map(statItem => (
                    <li className={css.item } key={ statItem[0]}> {statItem[0] === 'positivePercentage' ? 'Positive Percentage' : statItem[0]}:{` `}
                    {statItem[1]}</li>  
                ))
                }
            </ul>
        )
}

// export const Statistics = ({good, bad,neutral,total, positivePercentage}) => {
//     return (
//         <>
//           <span>Good: { good }</span>
//           <span>Neutral: { neutral }</span>
//           <span>Bad: { bad }</span>
//           <span>Total: { total }</span>
//           <span>Positive feedback: { positivePercentage }</span>
//         </>
//     );
// }