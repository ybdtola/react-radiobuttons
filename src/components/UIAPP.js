import React, {useState} from 'react'


const UIAPP = () => {

const [ entries, setColor ] = useState([
    {
      id: 1,
      title: 'Entry1',
      selected: '',
    },
    {
      id: 2,
      title: 'Entry2',
      selected: false
    },
    {
      id: 3,
      title: 'Entry3',
      selected: false
    },
    {
        id: 4,
        title: 'Entry4',
        selected: false
    },
    {
        id: 5,
        title: 'Entry5',
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



export default UIAPP