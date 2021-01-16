import React, { memo } from 'react'

const Footer = memo(props => { 
    const { status, setStatusFilter, numOfTodoLeft,  clearCompleted } = props
    const filterBtns = [
    {
        title: 'All',
        isActive: status === 'ALL',
        onClick: () => setStatusFilter('ALL'),
        link: ''
    },
    
    {
        title: 'Active',
        isActive: status === 'ACTIVE',
        onClick: () => setStatusFilter('ACTIVE'),
        link: 'active'
    },

    {
        title: 'Done',
        isActive: status === 'DONE',
        onClick: () => setStatusFilter('DONE'),
        link: 'done'
    }]
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodoLeft}</strong>
                <span> </span>
                <span>{numOfTodoLeft <= 1 ? 'item' : 'items'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn => (
                        <FilterBtn 
                            key={`btn${btn.title}`} 
                            {...btn}
                        />
                    ))
                }
              
            </ul>
            <button className="clear-completed" onClick={clearCompleted}>Clear done</button>
        </footer>

    )
})

const  FilterBtn = memo(props => {
    const { title, onClick, link, isActive} = props
    return (
        <>
            <li>
                    <a
                        href={`#/${link}`}
                        className={`${isActive} 'selected' : ' '? `}
                        onClick={onClick}
                    >
                        {title}
                    </a>
            </li>
            <span></span>
        </>
    )
})


export default Footer