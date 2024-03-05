import React from 'react'

interface SubMenuProps {
    options : string[]
}

const SubMenu : React.FC<SubMenuProps> = ({options}) => {
  return (
    <ul className='flex flex-col bg-'>
        {options.map((option, index) => (
            <li key={index}>{option}</li>
        ))}
    </ul>
  )
}

export default SubMenu