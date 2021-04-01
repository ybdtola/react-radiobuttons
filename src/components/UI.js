import React, {useState} from 'react'


const UI = () => {

const [ entries, setColor ] = useState([
    {
      id: 1,
      title: 'AdminEntry',
      selected: '',
    },
    {
      id: 2,
      title: 'AdminEntry',
      selected: false
    },
    {
      id: 3,
      title: 'AdminEntry',
      selected: false
    } 
]);

const toggleReminder = (id) => {
    // console.log('reminder', id);
  setColor(entries.map
        (entry => entry.id === id ? 
            {...entry, 
                selected: !entry.selected
            } 
            : entry)
        )
    }

    return (
        <div className='entries'>
            {entries.map(entry => (
                <p key={entry.id} onClick={() => toggleReminder(entry.id)} className={entry.selected && `highlight`}>{entry.title} </p>
            )) }
        </div>
    )
}



export default UI